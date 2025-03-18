import { Link, animateScroll as scroll } from "react-scroll";
import "./style/Footer.scss";
import Instagram from "./Instagram";

function Footer() {
  return (
    <>
      <div className="footer" id="contact-info">
        <p className="email">email: to-mój-email@gmail.com</p>
        <p className="phone">Tel: 888-888-888</p>
        <Link
          className="menu-link"
          activeClass="active"
          to="booking"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          Formularz kontaktowy
        </Link>
        <Instagram />
      </div>
    </>
  );
}

export default Footer;
