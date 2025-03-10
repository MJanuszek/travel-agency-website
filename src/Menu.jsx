import { Link, animateScroll as scroll } from "react-scroll";
import "./style/Menu.scss";

function Menu() {
  return (
    <div className="menu">
      <Link
        className="menu-link"
        activeClass="active"
        to="about-section"
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
      >
        O mnie
      </Link>
      <Link
        className="menu-link"
        activeClass="active"
        to="sudety"
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
      >
        Sudety
      </Link>
      <Link
        className="menu-link"
        activeClass="active"
        to="pricing"
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
      >
        Oferta
      </Link>
      <Link
        className="menu-link"
        activeClass="active"
        to="credentials"
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
      >
        Doświadczenie
      </Link>
      <Link
        className="menu-link"
        activeClass="active"
        to="booking"
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
      >
        Zarezerwuj wycieczkę
      </Link>
    </div>
  );
}

export default Menu;
