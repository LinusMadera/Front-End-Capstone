import Nav from "./Nav";
import logo from "../assets/images/Logo.svg";
const Header = () => {
    return(
        <header>
            <img src={logo} alt="restaurant logo"/>
            <Nav/>
        </header>
    )
}

export default Header;

