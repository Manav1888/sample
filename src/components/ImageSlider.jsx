import React, { useEffect, useRef } from 'react';
import image1 from '../assets/image carosuel/11.png'
import image2 from '../assets/image carosuel/12.png'
import image3 from '../assets/image carosuel/13.png'
import image4 from '../assets/image carosuel/14.png'
import image5 from '../assets/image carosuel/15.png'

const images = [
  image1,
  image2,
  image3,
  image4,
  image5
];

const ImageSlider = () => {
    const sliderRef = useRef(null);
  
    useEffect(() => {
        const handleScroll = (event) => {
          if (sliderRef.current) {
            const { scrollLeft, clientWidth, scrollWidth } = sliderRef.current;
            if (event.deltaY > 0) {
              
              sliderRef.current.scrollLeft += clientWidth;
            } else {
              
              sliderRef.current.scrollLeft -= clientWidth;
            }
          }
        };
    
        window.addEventListener('wheel', handleScroll);
    
        return () => window.removeEventListener('wheel', handleScroll);
      }, []);
  
  
    return (
      <div
        ref={sliderRef}
        className="flex overflow-hidden w-full scroll-smooth  snap-x snap-mandatory"
     
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-1/4 mr-4 rounded-xl snap-center">
            
            <img src={src} alt={`Slide ${index}`} className="w-full h-auto block rounded-xl" style={{ maxWidth: '100%' }} />
          </div>
        ))}
      </div>
    );
  };
  
  export default ImageSlider;