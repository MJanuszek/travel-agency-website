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
        About Me
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
        Credentials
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
        Book a Trip
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
        Pricing
      </Link>
    </div>
  );
}

export default Menu;
