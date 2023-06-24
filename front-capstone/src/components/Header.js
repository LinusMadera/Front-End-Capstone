import logo from "../assets/images/Logo.svg";
const Header = () => {
    return(
        <header className="header">
            <img className="logo" src={logo} alt="restaurant logo"/>
            <ul className="menu">
                <li>
                    <a aria-label='Home' href='/'>Home</a>
                </li>
                <li>
                    <a aria-label='About' href='/'>About</a>
                </li>
                <li>
                    <a aria-label='Menu' href='/'>Menu</a>
                </li>
                <li>
                    <a aria-label='Reservations' href='/booking'>Reservations</a>
                </li>
                <li>
                    <a aria-label='Order online' href='/'>Order Online</a>
                </li>
                <li>
                    <a aria-label='Login' href='/'>Login</a>
                </li>
            </ul>
        </header>
    )
}

export default Header;

