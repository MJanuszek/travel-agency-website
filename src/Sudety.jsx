import "./style/Sudety.scss";
import "./style/Text.scss";
import Trivia from "./Trivia";

function Services() {
  return (
    <div className="sudety-wrapper" id="sudety">
      <div className="sudety">
        <h1 className="title">Sudety, czyli gdzie?</h1>
        <p className="story">
          Sudety to malownicze pasmo górskie rozciągające się na pograniczu
          Polski, Czech i Niemiec. Sceneria oferuje niezwykłe bogactwo
          krajobrazów, od łagodnych wzniesień po strome urwiska. Lasy, wodospady
          i skalne labirynty w Sudetach inspirują wędrowców od wielu wieków.
        </p>

        <p className="story">
          Sudety są domem dla wielu gatunków flory i fauny, co sprawia, że są
          one wyjątkowym miejscem dla miłośników przyrody. Wśród fauny
          wyróżniają się takie gatunki jak kozica górska, ryś euroazjatycki,
          głuszec oraz sowa uszata. Natomiast bogata flora regionu obejmuje
          m.in. wawrzynka wilczełyko, modrzew europejski oraz liczne gatunki
          storczyków. Te malownicze góry kryją również rzadkie torfowiska
          wysokie, które są kluczowe dla zachowania bioróżnorodności, stanowiąc
          siedlisko dla unikalnych mchów, paproci i roślin owadożernych.
        </p>
        <p className="story">
          Sudety łączą przygodę z spokojem, oferując coś dla każdego, kto szuka
          zarówno wymagających tras, jak i chwili wytchnienia w naturze.
        </p>
      </div>
      <Trivia />
      <div className="img-between"></div>
    </div>
  );
}

export default Services;
