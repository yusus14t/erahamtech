import React from 'react'
import { service_img, service_img1, shape14, shape15, shape16 } from '../constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCoffee } from '@fortawesome/free-solid-svg-icons'
import services from "../data/services.json"

import jj from "../assets/images/service/app.png"



const Services = () => {

  return (
    <section className="tj-service-section service-inner">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div
          className="tj-sec-heading text-center"
          data-sal="slide-up"
          data-sal-duration={1000}
          data-sal-delay={600}
        >
          <span className="sub-title"> Our Services</span>
          <h2 className="sec-title">Service We Provide</h2>
          <div className="desc">
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      {services.map((service)=>{
        return(<div
          className="col-lg-3 col-md-6 col-sm-6"
          data-sal="slide-up"
          data-sal-duration={1000}
          data-sal-delay={100}
        >
          <div className="tj-service-item text-center">
            <div className="service-inner">
              <div className="service-icon">
                {/* <FontAwesomeIcon className='fs-8' icon={faCode}/> */}
                <img className='w-50' src={service.icon}/>
                {/* <img
                  className="image-1"
                  src={service.icon}
                  alt="Shape"
                /> */}
                <img
                  className="image-2"
                  src={service_img1}
                  // src={jj}
                  alt="Shape"
                />
              </div>
              <div className="service-content">
                <h4 className="title-link">
                  <a href="service-details.html">{service.name}</a>
                </h4>
                <p style={{textAlign:"justify"}} className='text-justify'>
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        </div>)
      })}
     
    </div>
  </div>
  <div className="service-section-shape">
    <div className="service-bg-shape pulse">
      <img src={shape14} alt="Shape" />
    </div>
    <div className="service-bg-shape1">
      <img src={shape15} alt="Shape" />
    </div>
    <div className="service-bg-shape2">
      <img src={shape14} alt="Shape" />
    </div>
    <div className="service-bg-shape3 pulse">
      <img src={shape15} alt="Shape" />
    </div>
    <div className="service-bg-shape4 pulse">
      <img src={shape16} alt="Shape" />
    </div>
  </div>
</section>

  )
}

export default Services