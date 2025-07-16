import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            
            <Link destination="/" className="full-name">
                Zafarali Tolibov
            </Link>
            
            <div className="topnav">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </header>
    );
}

export default Header;