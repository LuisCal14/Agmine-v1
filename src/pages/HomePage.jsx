import "../assets/style/Home.css";
import Map from "../pages/MapPage";
import Header from "../container/Header/Header";
import About from "../container/AboutUs/Aboutus";

function HomePage() {
  return (
    <>
      <Header />
      <About />
      <Map />
    </>
  );
}

export default HomePage;
