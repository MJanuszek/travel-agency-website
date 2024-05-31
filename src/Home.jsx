import Menu from "./Menu";
import "./style/Home.scss";
import TripBooking from "./TripBooking";
import Footer from "./Footer";
import Services from "./Services";
import Pricing from "./Pricing";

function Home() {
  return (
    <div className="home-page">
      <Menu />
      <h1>Discover most beautifull mountain trails</h1>
      <TripBooking />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
        perferendis similique eos nemo esse! Amet, quibusdam repellat dolore
        assumenda, culpa quasi labore eum reiciendis voluptate cum rem!
        Veritatis veniam eaque commodi corrupti in quia, voluptatum quod, fugiat
        repudiandae nulla reprehenderit, dolor tenetur error assumenda sequi ab
        accusamus libero? Officia quasi aperiam modi pariatur beatae minima!
      </p>
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
}

export default Home;
