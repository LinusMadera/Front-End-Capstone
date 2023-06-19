import logo from "../assets/images/Logo.svg";
const Header = () => {
    return(
        <header className="header">
            <img className="logo" src={logo} alt="restaurant logo"/>
            <ul className="menu">
                <li>
                    <a href='/Home'>Home</a>
                </li>
                <li>
                    <a href='/About'>About</a>
                </li>
                <li>
                    <a href='/Menu'>Menu</a>
                </li>
                <li>
                    <a href='/Reservations'>Reservations</a>
                </li>
                <li>
                    <a href='/Order Online'>Order Online</a>
                </li>
                <li>
                    <a href='/Login'>Login</a>
                </li>
            </ul>
        </header>
    )
}

export default Header;

