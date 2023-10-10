import { Link } from '../components/Link.jsx'
export default function Page404() {
    return (
        <>
            <h1>Error 404</h1>
            <p>Page not found.</p>
            <Link to="/">Home</Link>
        </>
    )
}