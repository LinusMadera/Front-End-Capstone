import logo from '../assets/images/logo2.png'
const Footer = () => {
    return (
        <footer>
            <img className='footerLogo' src={logo} alt="FooterLogo" />
          <nav className="FooterNav">
            <h4>Doormat Navigation</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Menu</a></li>
              <li><a href="/booking">Reservations</a></li>
              <li><a href="/">Order Online</a></li>
              <li><a href="/">Login</a></li>
            </ul>
          </nav>
          <section className="FooterContact">
            <h4>Contact</h4>
            <address>
              <p>Chicago</p>
            </address>
            <p>(000) 000-0000</p>
            <p>LittleLemon@DoNotEmail.com</p>
          </section>
          <section className="FooterSocialMedia">
            <h4>Social Media Links</h4>
            <ul>
              <li><a href="https://www.facebook.com">Facebook</a></li>
              <li><a href="https://www.instagram.com">Instagram</a></li>
            </ul>
          </section>
        </footer>
      );
}

export default Footer;