import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createMovie } from '../services/movieServices.js';


export const CreateMovieView = () => {
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    genre: '',
    synopsis: '',
    cast: '',
    image: '',
  });

  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createMovie({ ...formData, year: parseInt(formData.year, 10), cast: formData.cast.split(',') });
      alert('Película creada exitosamente!');
      navigate('/');
    } catch (err) {
      setError('Error creando la película. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <main className="container mx-auto min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Crear Película</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-4 shadow rounded-lg">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Título
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="year">
            Año
          </label>
          <input
            id="year"
            name="year"
            type="number"
            className="w-full px-3 py-2 border rounded"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="genre">
            Género
          </label>
          <input
            id="genre"
            name="genre"
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={formData.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="synopsis">
            Sinopsis
          </label>
          <textarea
            id="synopsis"
            name="synopsis"
            className="w-full px-3 py-2 border rounded"
            value={formData.synopsis}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="cast">
            Reparto (separado por comas)
          </label>
          <input
            id="cast"
            name="cast"
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={formData.cast}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
            Imagen (URL)
          </label>
          <input
            id="image"
            name="image"
            type="url"
            className="w-full px-3 py-2 border rounded"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Crear Película
        </button>
      </form>
    </main>
  );
};
