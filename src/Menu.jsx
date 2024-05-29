import { Link, animateScroll as scroll } from "react-scroll";
import "./style/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <Link
        activeClass="active"
        to="booking"
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
      >
        Book a Trip
      </Link>
    </div>
  );
}

export default Menu;
