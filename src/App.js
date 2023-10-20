//import logo from './logo.svg';
import Hero from "./component/hero"
import About  from './component/About';
import Gallery  from './component/Gallery';
import Screen  from './component/Screen';
import Profile from "./component/profile";
import imagehero1 from "./assert/bety.jpg"
import { useState } from "react";
import Wantcontact from "./component/Wantcontact"
import Catalog from "./component/Catalog";
import Product from "./component/product";
import OrderForm from "./component/orderForm";
import Footer from "./component/footer";
function App() {
  const [imagehero, setImage] = useState(imagehero1);
 

  const [className, setClassName] = useState('screen ');
// localStorage.setItem("productids","");
// localStorage.setItem("productidsItems","");
if (localStorage.getItem("productids")===null) {
   localStorage.setItem("productids","");
   localStorage.setItem("productidsItems","");
} 
// else{
//   sesIds(localStorage.getItem("productids").split(","))
// }
 
//

const [ids, sesIds] = useState(localStorage.getItem("productids").split(","));
const [length,setlength]=useState(ids.length-1)
  const setscreenImage=(image)=>{
    setImage(image);
    setClassName( 'screen showscreen');
  }
  const [classes,setClass]=useState(false)
  const SetTo=(e)=>{
   
    setClass(e)
  }
 
  const handclickedclear = () => {
    setClassName('screen');
  };
  const pushId = (id) => {
    let cacheids=localStorage.getItem("productids").split(",")
     
    if (!cacheids.includes(id.toString())) {
      let cacheitems=  localStorage.getItem("productidsItems").split(",")
  
      cacheids.push(id);
      localStorage.setItem("productids",cacheids);
      cacheitems.push(1); 
      localStorage.setItem("productidsItems",cacheitems);
      sesIds(cacheids)
      setlength(cacheids.length-1)
    }
  };
  
  // Remove id from ids array
 

  return (
    <>
        <div className="App">
        <Hero/>
        <About/>
        <Gallery setimage={setscreenImage}/>  
        <Profile/> 
        <Catalog setimage={setscreenImage} />
        <Wantcontact/>
        <Product setimage={setscreenImage}  setClass={SetTo} length={length} pushId={pushId} />
        <div className={classes?"form showform":"form "}><OrderForm  setClass={SetTo}  setlength={setlength} ids={ids} sesIds={sesIds}></OrderForm></div>
       <Footer></Footer>
       </div>
       <Screen img={imagehero}  DoIt={handclickedclear} cName={className}></Screen> 
  
    </>
   
  );
}

export default App;
