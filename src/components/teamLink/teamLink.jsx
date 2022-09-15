import React, {useState, useEffect} from 'react';
import TeamData from './teamData';
import './teamLink.css'

const TeamLink = () => {
    const index = TeamData
    let [show, setShow] = useState(0);
    
    const onClick = (e) => {
        let attr = e.target.getAttribute('src');
        let getIndex = index.findIndex(item => item.Image === attr )
        setShow(show = getIndex)
        console.log(show)
    }
    return (
    <div className='teams--container'>
        <div className='teams--link teams--link--left'>
            <div className='teams--link--top'>
                <img src={index[0].Image} onClick={onClick} alt="don" />
                <img src={index[1].Image} onClick={onClick} alt="don" />
            </div>
            <div className='teams--link--mid'>
                <img src={index[2].Image} onClick={onClick} alt="" />
            </div>
            <div className='teams--link--bot'>
                <img src={index[3].Image} onClick={onClick} alt="" />
                <img src={index[4].Image} onClick={onClick} alt="" />
            </div>
        </div>
        <div className='teams--show'>
            <img src={index[show].Image} alt="" />
            <h2>{index[show].name}</h2>
            <h3>{index[show].position}</h3>
            <button></button>
        </div>
        <div className='teams--link teams--link--right'>
            <div className='teams--link--top'>
                <img src={index[0].Image} onClick={onClick} alt="" />
                <img src={index[1].Image} onClick={onClick} alt="" />
            </div>
            <div className='teams--link--mid'>
                <img src={index[2].Image} onClick={onClick} alt="" />
            </div>
            <div className='teams--link--bot'>
                <img src={index[3].Image} onClick={onClick} alt="" />
                <img src={index[4].Image} onClick={onClick} alt="" />
            </div>
        </div>
    </div>
  )
}

export default TeamLink