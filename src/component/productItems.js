
import "./catalog.css"

function ProductItems(props) {
 const addcart =(id)=>{
props.addcart(id)
    }
    return<>
     
                <div className="card">
                    <div className="image-content">
                        <span className="overlay">
    
                        </span>
                        <div className="image-card">
                            <img src={props.items.image} alt="" className="card-img" onClick={()=>{props.setImage(props.items.image)}}></img>
                        </div>
                    </div>
                    <div className="card-content productItems">
                         <h3 className="title">
                              {props.items.Name}
                         </h3>
                         <p className="price new">
                          <span className="oldPrice">{props.items.oldPrice!==""?props.items.oldPrice+"Birr":""
                          
                          }</span><span>{props.items.price} Birr </span>  </p>
                          <button className="shaded"  onClick={()=>{
                            addcart(props.items.id)
                          }}>
              Add to Cart +
            </button>
                    </div>

                </div>
                
            
    </>
}

export default ProductItems;