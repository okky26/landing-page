import React,{useState, useRef, useEffect} from 'react';
import ImageCarouselData from './imageCarouselData';
import './imageCarousel.css'
import Button,{cardButton as CardButton} from '../button/button';
import * as FaIcon from 'react-icons/fa';


const ImageCarousel = () => {
  const [count, setCount] = useState(0);
  const length = ImageCarouselData.length;

  const nextSlide = () => {setCount((count + 1) % length)}
  const prevSlide = () => {setCount((nextFunction(count,length)))}
  
  const nextFunction = (count,length) => {
    let result = (count - 1) % length;
    return (result < 0 ?  length - 1 : result)
  }    
 
  const previousFunction = (count,length) => { let result = 8 - (count + 1 % length);
    return (result < 0 ? result - 1 : result)}
  
  const previous = (count === 0 ? previousFunction(count,length) : count - 1 % length);
  const next = (count + 1)%length
  const far = nextFunction(previous,length)
  return(
    <div className='container--slider'>
      
      <div className="buttonGroup">
          <CardButton buttonColor={'btn--color--light'} buttonSize={'btn--size--large'} buttonStyle={'btn--style--primary'} name={<FaIcon.FaChevronLeft/>} onClick={prevSlide}/>

          <CardButton buttonColor={'btn--color--light'} buttonSize={'btn--size--large'} buttonStyle={'btn--style--primary'} name={<FaIcon.FaChevronRight/>} onClick={nextSlide}/>
      </div>
      <div className='image--slider'>
        <div className='image--slides'>
        {ImageCarouselData.map((item,index) => {
          return (
            <div key={index} className={`card--default ${index === next && 'img--slide--next'} ${index === count && 'img--slide--show'} ${index === previous && 'img--slide--prev'} ${index === far && 'img--slide--far'}`}>
              <img src={item.image}alt="" />
              <div className="card--text">
                <h6>{item.title}</h6>
                <p>{item.rating}</p>
                <p>{item.price[0].pieces} {item.price[0].quantity}</p>
                <Button buttonColor={'btn--color--light'} buttonSize={'btn--size--small'} buttonStyle={'btn--style--primary'} path={'/products'} name={'Order Now'} />
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}
export default ImageCarousel