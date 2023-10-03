import { MovieList } from './components/MovieList.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'
import './App.css'
import { useState } from 'react'


function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const handleSort = () => {
    setSort(!sort)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='search' placeholder='Avengers, Star Wars, Matrix, ...' />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {loading ? <p>Cargando...</p> : <MovieList movies={movies} />}
      </main>
    </div>
  )
}

export default App
