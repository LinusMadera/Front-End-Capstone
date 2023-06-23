import logo from "../assets/images/Logo.svg";
const Header = () => {
    return(
        <header className="header">
            <img className="logo" src={logo} alt="restaurant logo"/>
            <ul className="menu">
                <li>
                    <a aria-label='Home' href='/Home'>Home</a>
                </li>
                <li>
                    <a aria-label='About' href='/About'>About</a>
                </li>
                <li>
                    <a aria-label='Menu' href='/Menu'>Menu</a>
                </li>
                <li>
                    <a aria-label='Reservations' href='/Reservations'>Reservations</a>
                </li>
                <li>
                    <a aria-label='Order online' href='/Order Online'>Order Online</a>
                </li>
                <li>
                    <a aria-label='Login' href='/Login'>Login</a>
                </li>
            </ul>
        </header>
    )
}

export default Header;

