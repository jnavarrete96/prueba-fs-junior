import { BrowserRouter, Route, Routes } from 'react-router'
import { HomeView } from '../views/HomeView'
import { CreateMovieView } from '../views/CreateMovieView'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path='/create-movie' element={<CreateMovieView/>}/>
      </Routes>
    </BrowserRouter>
  )
}
