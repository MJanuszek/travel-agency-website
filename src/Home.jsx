import Menu from "./Menu";
import Header from "./Header";
import TripBooking from "./TripBooking";
import Footer from "./Footer";
import Services from "./Services";
import Pricing from "./Pricing";
import About from "./About";
import Credentials from "./Credentials";

function Home() {
  return (
    <div className="home-page">
      <Menu />
      <Header />
      <About />
      <Credentials />
      <TripBooking />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
}

export default Home;
