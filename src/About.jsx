import "./style/About.scss";
import "./style/Text.scss";

function About() {
  return (
    <div id="about-section" className="about wrapper">
      <div className="photo"></div>
      <div className="info">
        <h2 className="title">Kim jestem?</h2>
        <p className="story">
          Na co dzień nauczycielem muzyki, weekenadmi przewodnikiem górskim.
          Muzyka i góry – dwa światy, które wydają się odległe, a dla mnie
          stanowią jedność. Jako nauczyciel fortepianu uczę wrażliwości na
          dźwięki i emocje. Jako przewodnik pokazuję piękno Sudetów i górskiej
          natury. Odkryj ze mną, jak można znaleźć harmonię pomiędzy tymi
          pasjami.
          <br />
        </p>
        <div className="signature">Piotr</div>
      </div>
    </div>
  );
}

export default About;
