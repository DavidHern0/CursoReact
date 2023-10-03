import { useState,useRef, useMemo } from "react"
import { searchMovies } from "./services/movies"

export function useMovies({ search, sort }) {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const previousSearch = useRef(search)
    const getMovies = useMemo(()=>{async () => {
        if (search === previousSearch.current) return
        try {
            setLoading(true);
            previousSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)

        } catch (error) {
            console.error(error.message)
        } finally {
            setLoading(false)
        }
    }},[search])
    
    const sortedMovies = useMemo(()=>{sort
    ? [... movies].sort((a,b) => a.title.localeCompare(b.title))
    : movies
    },[sort, movies])

    return { movies: sortedMovies, getMovies, loading }
}