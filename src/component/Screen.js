import "./screen.css"
const Screen = ( props ) => {
  
    const myfun =( event) => {
       if (event.target!==document.getElementById("image")) {
         props.DoIt()
       }}
     
   
    
   
     return (
       <>
         <div className={props.cName} id="screen" onClick={myfun} >
           
           <div>
         
            <div> <img src={props.img} alt='view' id="image" ></img></div>
           
           </div>
           <span onClick={props.DoIt}>
             <i className="fa fa-times" aria-label="x"></i>
           </span>
         </div>
       </>
     );
   };
   
   export default Screen;