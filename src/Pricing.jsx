import "./style/Pricing.scss";
import "./style/Text.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Pricing() {
  return (
    <div className="pricing-section" id="pricing">
      <h1 className="title">Oferta</h1>
      <div className="price-options">
        <div className="option">
          <div className="title">Wycieczka dzienna</div>
          <div className="story">
            Masz tylko jeden dzień, ale chcesz poczuć magię gór? Zapraszam na
            wycieczkę pełną niezapomnianych widoków, lokalnych historii i
            przyrody Sudetów. Wybierzemy trasę dostosowaną do Twoich możliwości
            – od łagodnych spacerów po bardziej wymagające szlaki. Idealna opcja
            na szybki reset w naturze!
          </div>

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
        <div className="option">
          <div className="title">Weekend </div>
          <div className="story">
            Chcesz uciec od codzienności i spędzić dwa dni w sercu Sudetów?
            Proponuję weekendową wyprawę, podczas której nie tylko przejdziemy
            malownicze szlaki, ale także poznamy lokalne legendy i ciekawostki.
            To doskonała okazja, by naładować energię, doświadczyć piękna gór i
            poczuć ich wyjątkowy klimat!
          </div>
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
        <div className="option">
          <div className="title">Dłuższa przygda</div>
          <div className="story">
            Pragniesz dłuższej przygody? Wybierz kilkudniowy trekking po
            Sudetach. Wędrówka przez różne krajobrazy – od tajemniczych lasów po
            skalne grzbiety – pozwoli poczuć magię tych gór. Każdy dzień to nowe
            odkrycia, historie zapisane w krajobrazie i chwile, które pozwalają
            oderwać się od codzienności. Głębokie zanurzenie się w naturze i
            znalezienie własnej harmonii wśród górskich ścieżek.
          </div>
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
      </div>
    </div>
  );
}

export default Pricing;
