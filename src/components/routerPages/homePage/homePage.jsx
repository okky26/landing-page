import React from 'react';
import Button from '../../button/button';
import ImgBanner1 from './gazebo--home.jpg';
import ImgBanner2 from './gazebo--home2.jpg';
import ImgReason1 from './reason--section 1.png';
import ImgReason2 from './reason--section2 1.png';
import ImgReason3 from './reason--section3 1.png'
import './homePage.css';
import ImageCarousel from '../../card/imageCarousel';
import TeamLink from '../../teamLink/teamLink';
const homePage = () => {
  return (
    <>
      <div className='banner--section'>
        <div className='banner--textBox'>
          <div className='textBox'>
            <h1>GREAT TASTE COME FROM PERFECT INGREDIENTS</h1>
            <p>Pastries and bakery 100% made from best plant-based ingredients</p>
            <p>A new style in enjoying your favorites pastry and bakery</p>
            <Button path='#' buttonStyle='btn--style--primary' buttonSize='btn--size--large' buttonColor='btn--color--dark' name='Find Out More'/>
          </div>
        </div>
        <div className='background'>
          <img src={ImgBanner1} alt="gazebo--banner" className='gazebo--banner'/>
          <img src={ImgBanner2} alt="gazebo--banner2" className='gazebo--banner2' />
        </div>
      </div>
      <div className="reason--section">
        <div className="work">
          <div className="workBox">
            <h2>50+ Types</h2>
            <p>variations of pastry and bakery</p>
          </div>
          <div className="workBox">
            <h2>100+ Pieces</h2>
            <p>on daily based production</p>
          </div>
          <div className="workBox">
            <h2>30+ Restaurants</h2>
            <p>distributed across the country</p>
          </div>
        </div>
        <div className="reason">
          <h2>REASONS</h2>
          <p className='reason--sub'>There are 3 main reasons why you should choose our products.</p>
          <div className="reasonList">
            <p className='reason--para'>
              <i>Best Recipe</i>
            </p>
            <img src={ImgReason1} alt="img--reason" />
            <div className="reason--content">
              <p>A recipe that has been through many research will always bringing the best output</p>
              <div></div>
            </div>
          </div>
          <div className="reasonList-2">
            <p className='reason--para-2'>
              <i>Best Ingredients</i>
            </p>
            <img src={ImgReason2} alt="img--reason" />
            <div className="reason--content-2">
              <p>Choosen ingredients from the best producent in the country will always give a wonderful taste</p>
              <div></div>
            </div>
          </div>
          <div className="reasonList-3">
            <p className='reason--para-3'>
              <i>Best Teams</i>
            </p>
            <img src={ImgReason3} alt="img--reason" />
            <div className="reason--content-3">
              <p>Well-trained cook that willing to give their best to maintain the product quality always come to perfection</p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="product--section">
        <h2>PRODUCTS</h2>
        <p>Here are the best selection of our products. All products are made freshly everyday to  keep the perfect standart when come to your hands</p>
        <Button buttonColor={'btn--color--light'} buttonSize={'btn--size--large'} buttonStyle={'btn--style--primary'} name={'SEE FULL PRODUCTS'}  path={'/products'}/>
        <ImageCarousel/>
      </div>
      <div className="teams--section">
        <div className="title">
          <div className='title--box'>
            <h2>TEAMS</h2>
            <div></div>
            <div></div>
          </div>
          <p>Meet our best man that worked hard behind the stage to make sure the products always come in perfection
          </p>
        </div>
        <TeamLink/>
      </div>
    </>
  )
}

export default homePage