import React from 'react';
import { Link } from 'react-router-dom';
import './button.css'

const button = ({name,buttonStyle,buttonSize,buttonColor,path}) => {
  return (
    <div>
        <button className={`btn ${buttonStyle} ${buttonSize} ${buttonColor}`}>
            <Link to={path} className={`${buttonColor}`}>
                {name}
            </Link>
        </button>
    </div>
  )
}
 
export const cardButton = ({name, buttonStyle, buttonSize, buttonColor, onClick}) => {
  return(
    <div>
      <button className={`btn ${buttonStyle} ${buttonSize} ${buttonColor}`} onClick={onClick}>
        {name}
      </button>
    </div>
  )
}
export default button;