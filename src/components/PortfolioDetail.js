import React, { useEffect } from "react";
import {
  shape10,
  shape9,
} from "../constant";
import { Projects } from "../data/Projects";
import { Link, useParams } from "react-router-dom";
import ProjectSlider from "./ProjectSlider";

const PortfolioDetail = () => {
  const params = useParams();
  const project = Projects[params.id];

  return (
    <section className="tj-portfolio-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="portfolio-wrapper">
              {/* <div className="portfolio-lg-image">
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    aspectRatio:"16/9",
                    objectFit:"contain"
                  }}
                  src={project.image}
                  alt="Image"
                />
              </div> */}
              <ProjectSlider images={project.images}/>
              <div className="tagcloud">
                {/* <a href="#">
                  <i className="flaticon-client" /> Client Name
                </a>
                <a href="#">
                  <i className="flaticon-categories" /> Categories
                </a> */}
                <Link to={project.liveProjectLink} target="_blank">
                  <i className="flaticon-completed-task" />{" "}
                  Visit Website
                </Link>
              </div>
              <div className="portfolio-content">
                <h3 className="title">{project.projectName}</h3>
                <p dangerouslySetInnerHTML={{__html : project.description}}></p>

                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tj-portfolio-shape">
        <div className="group-one">
          <div className="shape-1">
            <img src={shape9} alt="Shape" />
          </div>
          <div className="shape-2">
            <img src={shape10} alt="Shape" />
          </div>
        </div>
        <div className="group-two">
          <div className="shape-1">
            <img src={shape9} alt="Shape" />
          </div>
          <div className="shape-2">
            <img src={shape10} alt="Shape" />
          </div>
        </div>
        <div className="group-three">
          <div className="shape-1">
            <img src={shape9} alt="Shape" />
          </div>
          <div className="shape-2">
            <img src={shape10} alt="Shape" />
          </div>
        </div>
        <div className="group-four">
          <div className="shape-1">
            <img src={shape9} alt="Shape" />
          </div>
          <div className="shape-2">
            <img src={shape10} alt="Shape" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetail;
