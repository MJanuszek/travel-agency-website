import Menu from "./Menu";
import Header from "./Header";
import TripBooking from "./TripBooking";
import Footer from "./Footer";
import Sudety from "./Sudety";
import Pricing from "./Pricing";
import About from "./About";
import Credentials from "./Credentials";

function Home() {
  return (
    <div className="home-page">
      <Menu />
      <Header />
      <About />
      <Sudety />
      <Pricing />
      <Credentials />
      <TripBooking />
      <Footer />
    </div>
  );
}

export default Home;
