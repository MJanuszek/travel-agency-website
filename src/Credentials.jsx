import "./style/Credentials.scss";

function Credentials() {
  return (
    <>
      <div className="credentials" id="credentials">
        <h1 className="credentials-title">My credentials</h1>
        <div className="insta">
          <h2 className="insta-title">Visit my instargam</h2>
          <a
            href="https://www.instagram.com/twojanazwa_uzytkownika"
            target="_blank"
          >
            <img src="src/assets/instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Credentials;
