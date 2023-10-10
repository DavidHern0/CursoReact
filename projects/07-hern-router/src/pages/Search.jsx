import { useEffect } from 'react'
import { Link } from '../components/Link.jsx'
export default function SearchPage({ routeParams }) {
  useEffect(() => {
    document.title = routeParams.query
  }, []);

  return (
    <>
      <h1>Search Page</h1>
      <p>No hay resultados para: {routeParams.query}</p>
      <Link to="/about">About me</Link>
    </>
  )
}