import "./style/Credentials.scss";

function Credentials() {
  return (
    <>
      <div className="credentials" id="credentials">
        <div className="storyteller">
          <h1 className="credentials-title">
            Wędrówka ma swój rytm, melodia swoją przestrzeń
          </h1>
          <div>
            <p className="story">
              W górach każdy krok wyznacza tempo marszu – czasem jest to
              powolne, miarowe stawianie stóp na miękkim podłożu leśnej ścieżki,
              a czasem dynamiczne wspinanie się po skalistym zboczu, gdzie
              oddech staje się krótszy, a serce przyspiesza. Tak jak w muzyce,
              gdzie frazy układają się w większą całość, tak i wędrówka składa
              się z etapów: spokojnego wejścia w rytm, intensywnego podejścia,
              kulminacji na szczycie i powolnego wyciszenia podczas zejścia.
            </p>
            <p className="story">
              Wędrując, czujemy, jak przestrzeń wokół nas zmienia swój charakter
              – z gęstego lasu wychodzimy na otwarte polany, gdzie horyzont
              poszerza się niczym dźwięk rozchodzący się w katedrze. Wiatr
              szumiący w koronach drzew to muzyczne tło dla naszych kroków, a
              śpiew ptaków i plusk strumienia uzupełniają symfonię natury.
            </p>
            <p className="story">
              W górach, podobnie jak w muzyce, liczy się uważność – na
              otaczające nas dźwięki, rytm naszego ciała, oddech i krajobraz.
              Górska przestrzeń, niczym muzyczna fraza, wypełnia ciszę i daje
              możliwość odnalezienia wewnętrznej harmonii.
            </p>
          </div>
        </div>
        <h1 className="credentials-title">Poznaj mnie lepiej</h1>
        <div className="insta">
          <h2 className="insta-title">Zajrzyj na:</h2>
          <a
            href="https://www.instagram.com/twojanazwa_uzytkownika"
            target="_blank"
          >
            <img
              className="inst-icon"
              src="src/assets/instagram.png"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Credentials;
