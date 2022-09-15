import React from 'react';
import './teamsPage.css';
import teamData from '../../teamLink/teamData';

const teamsPage = () => {
  return (
    <>
      <div className='main--content'>
        <div className='teams--title--box'>
          <div className='team--title'>
            <h1>Teams</h1>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p>Here is our best people that always commited to their craftmanship on keeping the perfection</p>
        </div>
        <div className='teams--content'>
          {teamData.map((item, index) => {
            return (
              <div key={index} className={`content ${index % 2 === 0 ? 'content--left' : 'content--right'}`}>
                {index % 2 === 0 && <img src={item.Image} alt="img" />}
                <div className={`content--text ${index % 2 === 0 ? 'content--text--left' : 'content--text--right'}`}>
                  <div className='content--box'>
                    <h5>{item.name}</h5>
                    <h5>{item.position}</h5>
                  </div>
                  <p>{item.desc}</p>
                </div>
                {index % 2 !== 0 && <img src={item.Image} alt="img" />}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default teamsPage