import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '../button/button';
import './navbar.css'

const Navbar = () => {
    const [state, changeState] = useState({status : 'home'})
    const menuActive = (e) => {
        changeState((prevState) => ({
            ...prevState,
            status : e.target.id
        }))
    }
  return (
    <div className='navbar'>
        <img src="" alt="" />
        <div className={`navLink ${state.status == 'products'  && 'linkLight'} ${state.status == 'contact'  && 'linkLight'}`}>
            <Link to='/' id='home' onClick={menuActive} className={`links ${state.status == 'home' && 'homeActive'}`}> 
                Home
            </Link>
            <Link to='/teams' id='teams' onClick={menuActive} className={`links ${state.status == 'teams' && 'teamsActive'}`}> 
                Teams
            </Link>
            <Link to='/products' id='products' onClick={menuActive} className={`links ${state.status == 'products' && 'productsActive'}`}> 
                Products
            </Link>
            <Link to='/policy' id='policy' onClick={menuActive} className={`links ${state.status == 'policy' && 'policyActive'}`}> 
                Policy
            </Link>
            <Link to='/contact' id='contact' onClick={menuActive} className={`links ${state.status == 'contact' && 'contactActive'}`}> 
                Contact
            </Link>
        </div>
        <Button path='/products' buttonStyle='btn--style--primary' buttonSize='btn--size--large' buttonColor={`${state.status == 'products' ? 'btn--color--light' : 'btn--color--dark'}`} name='Order Now'/>
    </div>
  )
}

export default Navbar