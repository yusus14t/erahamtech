import React from "react";
import  {Projects}  from "../data/Projects";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="tj-portfolio-page">
      <div className="container">
        <div
          className="tj-sec-heading text-center"
          data-sal="slide-up"
          data-sal-duration={1000}
          data-sal-delay={600}
        >
          <span className="sub-title">Portfolio</span>
          <h2 className="sec-title">Fratured Projects</h2>
          <div className="desc">
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release
            </p>
          </div>
        </div>
        <div className="row">  
          {Projects.map((project, index)=>(<div
            className="col-lg-4 col-md-6 col-sm-6"
            data-sal="slide-up"
            data-sal-duration={1000}
            data-sal-delay={200}
          >
            <div className="tj-portfolio-item-two">
              <div 
              style={{width:"400px", height:"200px"}}
              className="portfolio-image">
              <Link to={`/portfolio-details/${index}`}>
                  <img
                    className="w-100 h-100"
                    src={project.images[0]}
                    alt="Image"
                  />
              </Link>
              </div>
              <div className="portfolio-content">
                <h4 className="title">
                  <Link to={`/portfolio-details/${index}`}>
                    {project.projectName}
                  </Link>
                </h4>
              </div>
            </div>
            <div className="text-center "><Link to={`/portfolio-details/${index}`}><h5 className="text-dark">{project.projectName}</h5></Link></div>
          </div>))}
        
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
