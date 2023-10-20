
import React, {useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination, A11y} from 'swiper/modules';
import { Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

//import {BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Items from "./items";

import CardCatalogs from "./cardsofCatalog";


const CatalogisList = (props) => {
 
  const sliderRef = useRef()

  const handleNext = ()=>{
    sliderRef.current.swiper.slideNext();
  }

  const handlePrev = ()=>{
    sliderRef.current.swiper.slidePrev();
  }
  const setScreenImage=(image)=>{
    props.setImage(image)
  }
  
  
return (

  <>
   <div className="slide-container" key="cataloglist">
        <div className="slide-content">
            <div className="card-wrapper">
                 <div className="btns">
                <button className="prev" onClick={handlePrev}>
                <i className="fa fa-angle-left" aria-hidden="true"></i>
                                </button>
                                <button className="next" onClick={handleNext}>        
                                <i className="fa fa-angle-right" aria-hidden="true"></i></button>
            </div>
            <Swiper 
       
       modules={[Navigation, Pagination, A11y, Autoplay]}
       ref={sliderRef}
      
       slidesPerView={4}
       breakpoints={{
         450:{slidesPerView:1},
         840:{slidesPerView:2},
         1160:{slidesPerView:3},
        
       }}
       autoplay={{delay: 4000, disableOnInteraction: false}}
       loop={true}
       loopedSlides={3}>
      

        {Items.map((element) => {
          // if (element.type.includes(ItemsCatagory[i])) {
            
          // }
        
         
              return (
              <>  
            <SwiperSlide  key={element.id}>

           <CardCatalogs key={"0"+element.id} image={element.image} name = {element.Name} desc={element.description} setImage={setScreenImage}/>
            
            </SwiperSlide>
                
              </> 
              );
            })
            
            }
            
     
         
       </Swiper>
                
            </div>
           
            
        </div>
        
    </div>
  </>
       
       )
}

export default CatalogisList;