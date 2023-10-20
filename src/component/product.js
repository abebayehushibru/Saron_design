import {  useState } from "react"
import Productlist from "./productlist"
import carticon from "../assert/cart.png"
import ItemsCatagory from "./itemscatagory";
import {motion} from "framer-motion"
function Product(props) {
const [scale,setScale]=useState(false)
let [catagory,setCatagory]=useState("all");
  const SetTo=(e)=>{
    props.setClass(true)
  }
  const mycatagory=(e)=>{
    console.log(e.target.value.toLowerCase());
   setCatagory(e.target.value.toLowerCase())
  }
  const addcart =(id)=>{
      // Start the animation.

      setScale(!scale)
 props.pushId(id)
 setScale(props.length)
 var second=0
 setInterval(()=>{
second++;
if (second==2) {
  setScale(false)
  clearInterval()
}

 },1000)
        }
  

  return (
    <>
   
      <div className="main-container" id="shop">
        <h5>COLLECTION</h5>
        <h1>
          <span style={{ color: "orange" }}>— </span>  Select Your Perfect Look.
        </h1>
        <p>
        Check out our new capsule collection and add items you like the most to the shopping cart!</p>   
      </div>
      <div className="catagory">
       <span> Catagory : </span><select  onChange={(e)=>{mycatagory(e)}}>
       <option value="all" selected="selected" >All</option>
       {ItemsCatagory.map((element) => {

        return<>

<option value={element}>{element}</option>
        </>
       })}
           
        </select>
      </div>
      <Productlist setImage={props.setimage} addcart={addcart} catagory={catagory}/>
        
      <motion.div

      animate={{ scale: scale?[1.1,0.9,0.9,1]:1 }}
      transition={{duration:.5}}
     
     className="cartlink" onClick={SetTo}>
<img src= {carticon} alt="cart icon"></img>
<span style={props.length>0?{display:"flex"}:{display:"none"}}>{props.length>9?"9+":props.length}</span>

        </motion.div>
    </>
  );
}

export default Product