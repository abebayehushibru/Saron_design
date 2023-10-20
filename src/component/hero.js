import Navbar from "./navbar";
import "./hero.css";
function Hero(params) {
  return (
    <>
      <div className="hero">
        <Navbar></Navbar>

        <div className="banner">
          <h5>CLOTHE DESIGNER </h5>
          <h1><span style={{color:"orange"}}>— </span> Your New Everyday Style.</h1>
          <p>
            Saron Design is your destination for designer and comfortable clothes
            for any occasion.
          </p>

          <div>
            <a href="#shop" className="shaded">
              Shop Now
            </a>
            <a href="#About" className="not-shaded">
              About Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
