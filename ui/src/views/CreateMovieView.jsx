import { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
        const dataToSend = {
          ...formData,
          year: parseInt(formData.year, 10),
          cast: formData.cast ? formData.cast.split(',') : [],
          synopsis: formData.synopsis.trim() === '' ? null : formData.synopsis,
        };
        
        await createMovie(dataToSend);
        setSuccessMessage('Movie successfully created!');
        setTimeout(() => setSuccessMessage(''), 3000);
  
        setFormData({
          title: '',
          year: '',
          genre: '',
          synopsis: '',
          cast: '',
          image: '',
        });
  
      } catch (err) {
        setError('Error creando la película. Por favor, inténtalo de nuevo.');
      }
    };

  return (
    <main className="container mx-auto min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-4 text-white">Create Movie</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-gray-800 text-white shadow-lg rounded-lg">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-300 font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 font-bold mb-2" htmlFor="year">
            Year
          </label>
          <input
            id="year"
            name="year"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
            value={formData.year}
            onChange={handleChange}
            onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')} 
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 font-bold mb-2" htmlFor="genre">
            Genre
          </label>
          <input
            id="genre"
            name="genre"
            type="text"
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
            value={formData.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 font-bold mb-2" htmlFor="synopsis">
            Synopsis
          </label>
          <textarea
            id="synopsis"
            name="synopsis"
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
            value={formData.synopsis}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 font-bold mb-2" htmlFor="cast">
            Cast (separated by commas)
          </label>
          <input
            id="cast"
            name="cast"
            type="text"
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
            value={formData.cast}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 font-bold mb-2" htmlFor="image">
            Image (URL)
          </label>
          <input
            id="image"
            name="image"
            type="url"
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Create Movie
        </button>
        {successMessage && (
          <p className="text-green-500 text-center mt-4">{successMessage}</p>
        )}
      </form>
      <div className="flex justify-center mt-8">
        <Link
          to="/"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};
