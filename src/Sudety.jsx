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
          Polski, Czech i Niemiec. Choć nie są najwyższe, kryją w sobie
          niezwykłe bogactwo krajobrazów, tajemnic i historii. To tutaj
          znajdziemy zarówno łagodne wzniesienia, jak i strome urwiska, gęste
          lasy, wodospady oraz skalne labirynty, które inspirują wędrowców od
          wieków.
        </p>
        <p className="story">
          Najwyższym szczytem Sudetów jest Śnieżka (1603 m n.p.m.), górująca nad
          Karkonoszami, często spowita mgłą, co dodaje jej mistycznego
          charakteru. Pasmo to skrywa również Góry Stołowe z unikalnymi
          formacjami skalnymi, Rudawy Janowickie i pełne legend Góry Sowie.
        </p>
        <p className="story">
          Sudety są świadkami burzliwej historii – od średniowiecznych zamków,
          przez dawne kopalnie, aż po poniemieckie schrony. Ich szlaki prowadzą
          nie tylko ku spektakularnym widokom, ale i przez ślady dawnych osad.
        </p>
        <p className="story">
          Sudety to góry, które łączą przygodę z spokojem – niezależnie od tego,
          czy szukasz wymagających szlaków, tajemniczych miejsc czy chwili
          oddechu wśród natury, tutaj znajdziesz coś dla siebie.
        </p>
      </div>
      <Trivia />
      <div className="img-between"></div>
    </div>
  );
}

export default Services;
