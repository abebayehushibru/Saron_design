import CatalogisList from "./catalogisList"

function Catalog(props) {
  const setScreenImage=(image)=>{
    props.setimage(image)
  }
    return (
        <>
          <div className="main-container">
            <h5>CATALOGE</h5>
            <h1>
              <span style={{ color: "orange" }}>— </span> Trendy Looks of Your
              Spring.
            </h1>
            <p>
              Stay playful and romantic this spring with the new collection by Saron Design ..
            </p>   
          </div>

          <CatalogisList setImage={setScreenImage}/>
        </>
      );
}

export default Catalog;