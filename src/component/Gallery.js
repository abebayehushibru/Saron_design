import "./gallery.css";
import img from "../assert/child.jpg";
import img2 from "../assert/design.jpg";
import img3 from "../assert/tesfaye.jpg";
import img4 from "../assert/women.jpg";
import img5 from "../assert/family.jpg";
import img6 from "../assert/black-wommen.jpg";
import img7 from "../assert/bety.jpg";
function Gallery(props) {
  return (
    <>
      <div className="main-container">
        <h5>GALLERY</h5>
        <h1>
          <span style={{ color: "orange" }}>— </span> Trendy Looks of Your
          Spring.
        </h1>
        <p>
          Stay playful and romantic this spring with the new collection by Saron Design ..
        </p>

        <div className="bottom-container">
        <img src={img3} alt="image" onClick={(e)=>{
            props.setimage(img3)
        }}></img>{" "}
          <img src={img4} alt="image"onClick={()=>{
            props.setimage(img4)
        }}></img>
          <img src={img7} alt="image" onClick={()=>{
           
            props.setimage(img7)
        }}></img>
          <img src={img} alt="image" onClick={()=>{
           
           props.setimage(img)
       }}></img>
          <img src={img5} alt="image" onClick={()=>{
           
           props.setimage(img5)
       }}></img>
          
          <img src={img6} alt="image" onClick={()=>{
           
           props.setimage(img6)
       }}></img>
          <img src={img2} alt="image" onClick={()=>{
           
           props.setimage(img2)
       }}></img>
          
          
        
          
        </div>
      </div>
    </>
  );
}

export default Gallery;
