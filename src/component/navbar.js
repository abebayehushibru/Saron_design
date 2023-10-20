import "./navbar.css"
import { useState } from "react"
function Navbar() {
    const [clicked, setClicked] = useState(false);
    
    return <>
    
    <nav >

        <div className="Logo">
            <a href="/">
            <span className="large-word">S</span> <span className="word">aron</span>
            <p>design</p>
            </a>
        </div>
        <div className={clicked?"active":"not-active"}>
            <ul>
                <li><a href="t">Home</a></li>
                <li><a href="t">Cataloge</a></li>
                <li><a href="t">Collection</a></li>
                <li><a href="t">About Us</a></li>
            </ul>
        </div >
        <div onClick={()=>{
            setClicked(!clicked)
        }}>
        <i className= {clicked?"fa fa-times":"fa fa-bars"} aria-hidden="true" > </i>
        </div>
    </nav>
    </>
}
export default Navbar