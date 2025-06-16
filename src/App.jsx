import { Routes, Route } from 'react-router-dom'
import "./css/App.css"

import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Navbar from './components/Navbar'
import { MovieProvider } from './contexts/MovieContext'

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites/>} />
      </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
