import "./style/Credentials.scss";

function Credentials() {
  return (
    <>
      <div className="credentials" id="credentials">
        <div className="storyteller">
          <h1 className="credentials-title">
            Każda wędrówka ma swój rytm, melodia swoją przestrzeń
          </h1>
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
