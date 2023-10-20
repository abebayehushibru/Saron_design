
import "./catalog.css"
function CardCatalogs(props) {
    
    const setScreenImage=(image)=>{
        props.setImage(image)
      }
    return<>
     
                <div className="card"  >
                    <div className="image-content" >
                        <span className="overlay">
    
                        </span>
                        <div className="image-card">
                            <img src={props.image} alt="" className="card-img" onClick={()=>{setScreenImage(props.image)}}></img>
                        </div>
                    </div>
                    <div className="card-content" >
                         <h3 className="title">
                         {props.name}
                         </h3>
                         <p>
                           {props.desc} </p>
                    </div>

                </div>
                
            
    </>
}

export default CardCatalogs;