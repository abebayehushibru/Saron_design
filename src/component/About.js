import img from "../assert/black-wommen.jpg"
import "./About.css"
function About(params) {
   return<>
   <div className="container" id="About">
    <div>
        <img src={img} alt="n"></img>
    </div>
    <div>
        <h5>ABOUT US</h5>
        <h1><span style={{color:"orange"}}>— </span> Comfort and Quality Come First.</h1>
          <p>
          Saron  have always dreamed of comfortable  clothing that would look appropriate in any circumstances.
<br></br>
<br></br>
This is how the Saron Design brand appeared – it is a brand for All who like to feel confident, seductive, and stylish in any situation. We use only natural fabrics and pay great attention to details that make the difference. 
          </p>

    </div>

   </div>
   </> 
}
export default About