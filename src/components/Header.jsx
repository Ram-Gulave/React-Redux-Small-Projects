import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">MyStore</div>

                <nav className="nav">
                    <ul>
                        <li className="no-underline-link"><Link to="/">Home</Link></li>
                    </ul>
                </nav>

                <AddToCart />
            </div>
        </header>
    )
}

export default Header;