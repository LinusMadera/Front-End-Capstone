const Footer = () => {
    return (
        <>
          <figure>
            <img src="path/to/image" alt="Footer" />
          </figure>
          <nav>
            <h4>Doormat Navigation</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/order-online">Order Online</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </nav>
          <section>
            <h4>Contact</h4>
            <address>
              <p>Chicago</p>
            </address>
            <p>Phone</p>
            <p>Email</p>
          </section>
          <section>
            <h4>Social Media Links</h4>
            <ul>
              <li><a href="https://www.facebook.com">Facebook</a></li>
              <li><a href="https://www.instagram.com">Instagram</a></li>
            </ul>
          </section>
        </>
      );
}

export default Footer;