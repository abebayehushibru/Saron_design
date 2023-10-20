
import React, {useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination, A11y} from 'swiper/modules';
import { Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import profile from '../assert/bety.jpg'
//import {BsChevronLeft, BsChevronRight } from "react-icons/bs";

import CardCatalogs from "./cardsofCatalog";
import ProductItems from "./productItems";
import Items from "./items";

import ItemsCatagory from "./itemscatagory";



const CatalogisList = (props) => {
  let arrays=[];
let i=0;


  const sliderRef = useRef()

  const handleNext = ()=>{
    sliderRef.current.swiper.slideNext();
  }

  const handlePrev = ()=>{
    sliderRef.current.swiper.slidePrev();
  }

return (

  <>
   <div className="slide-container" >
        <div className="slide-content">
            <div className="card-wrapper">
                 <div className="btns">
                <button className="prev" onClick={handlePrev}>
                <i class="fa fa-angle-left" aria-hidden="true"></i>
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
       autoplay={{delay: 4000, disableOnInteraction: true}}
       loop={true}
       loopedSlides={3}>
        {Items.map((element) => {
          if (element.type.includes(props.catagory) || props.catagory==="all") {
            
            return (
              <>  <SwiperSlide>
              <ProductItems items={element} setImage={props.setImage} addcart={props.addcart}/>
          </SwiperSlide>
              </> 
              ); 
          }
              
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