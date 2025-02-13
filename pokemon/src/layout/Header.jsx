import { Link } from "react-router-dom"
export function Header(){
    return(
        <header>
            <nav>
                <Link to={"/"} className="">Home</Link>
            </nav>
        </header>
    )
}