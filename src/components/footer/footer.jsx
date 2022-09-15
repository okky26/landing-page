import React from 'react';
import Button from '../button/button';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './footer.css';

const footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div className="copyright">
          <h5 className="copyright">
            Copyright by Okky26
          </h5>
          <h5>
            Logo
          </h5>
        </div>
        <div className='findUs'>
          <div className="tag">
            <Button path='/' name={<FaIcons.FaFax size='2em'/>} buttonColor='btn--color--light' buttonSize='btn--size--small' buttonStyle='btn--style--secondary'/>
            +xxxxxxx
          </div>
          <div className="tag">
            <Button path='/' name={<FaIcons.FaMapMarkerAlt size='2em'/>} buttonColor='btn--color--light' buttonSize='btn--size--small' buttonStyle='btn--style--secondary'/>
            Indonesia
          </div>
          <div className="tag">
            <Button path='/' name={<FaIcons.FaPhoneAlt size='2em'/>} buttonColor='btn--color--light' buttonSize='btn--size--small' buttonStyle='btn--style--secondary'/>
            +62 812 7054 6001
          </div>
        </div>
        <div className="faq">
          <Link to='/contact'>FAQ</Link>
          <Link to='/contact'>Policy</Link>
        </div>
        <div className='socmed'>
          <Button path='/' name={<FaIcons.FaInstagram size='2em'/>} buttonColor='btn--color--light' buttonSize='btn--size--small' buttonStyle='btn--style--secondary'/>
          <Button path='/' name={<FaIcons.FaLinkedinIn size='2em'/>} buttonColor='btn--color--light' buttonSize='btn--size--small' buttonStyle='btn--style--secondary'/>
        </div>
        <div className='button'>
          <Button path='/' name='Contact Us' buttonStyle='btn--style--primary' buttonColor='btn--color--light' buttonSize='btn--size--large'/>
        </div>
      </div>
    </>
  )
}

export default footer