import {  useState } from "react"
import ContactForm from "./ContactForm"

function WantsContact(params) {

  const [classes,setClass]=useState(false)
  const SetTo=(e)=>{
    console.log(e)
    setClass(e)
  }
    return <>
    <div className="main-container" id="Contact" style={{ backgroundColor: "#f8f3f1" }}>
        <h1 style={{ color: "orange" }}> <i className="fa fa-envelope" aria-hidden="true"></i></h1>
        <h1>
        Want to Collaborate With Us?
        </h1>
        <h1>
          <span style={{ color: "orange" }}>——— </span> 
        </h1>
        <p>Please contact us to discuss the details with our manager.</p>
        <div style={{marginTop:"15px",marginBottom:"15px"}}>
            <button className="shaded" onClick={()=>{SetTo(true)}}>
              Contact Us
            </button>
            </div>

        </div>
        <div className={classes?"form showform":"form "}>
        <ContactForm changeClass={SetTo}></ContactForm>
        
        </div>
       
        </>
}

export default WantsContact