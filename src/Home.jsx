import Menu from "./Menu";
import "./style/Home.scss";
import TripBooking from "./TripBooking";

function Home() {
  return (
    <div className="home-page">
      <Menu />
      <h1>Discover most beautifull mountain trails</h1>
      <TripBooking />
    </div>
  );
}

export default Home;
