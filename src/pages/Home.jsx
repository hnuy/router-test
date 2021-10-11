import { Link } from 'react-router-dom'

export function Home(){
    return (
        <div>
            <h1>this is home page</h1>
            <button><Link to="/contact"> Go to Contact Page </Link></button>
        </div>

    )
}