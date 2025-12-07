import React from 'react'
import './services.css'
import {Services_data} from '../../assets/services_datas'
import arrow_icon from '../../assets/right.png'


const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {Services_data.map((service,index)=>{
          return <div key={index} className="services-formate">
          <h3>{service.s_no}</h3>
          <h2>{service.s_name}</h2>
          <p>{service.s_disc}</p>
          <div className="services-readmore">
            <p>Read More</p>
            <img src={arrow_icon}height={'50px'} width={'50px'} alt="" />
          </div>
          </div>
        })}
      </div>
      
    </div>
  )
}

export default Services
