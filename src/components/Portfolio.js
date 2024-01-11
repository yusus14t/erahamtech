import React from "react";
import { portfolio10, portfolio11, portfolio12, portfolio13, portfolio14, portfolio9 } from "../constant";

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
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-sal="slide-up"
            data-sal-duration={1000}
            data-sal-delay={100}
          >
            <div className="tj-portfolio-item-two">
              <div className="portfolio-image">
                <a href="portfolio-details.html">
                  <img
                    src={portfolio9}
                    alt="Image"
                  />
                </a>
              </div>
              <div className="portfolio-content">
                <span className="sub-title">Business Consulting</span>
                <h4 className="title">
                  <a href="portfolio-details.html">
                    Digital marketing Services
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-sal="slide-up"
            data-sal-duration={1000}
            data-sal-delay={200}
          >
            <div className="tj-portfolio-item-two">
              <div className="portfolio-image">
                <a href="portfolio-details.html">
                  <img
                    src={portfolio10}
                    alt="Image"
                  />
                </a>
              </div>
              <div className="portfolio-content">
                <span className="sub-title">Business Consulting</span>
                <h4 className="title">
                  <a href="portfolio-details.html">
                    Digital marketing Services
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-sal="slide-up"
            data-sal-duration={1000}
            data-sal-delay={300}
          >
            <div className="tj-portfolio-item-two">
              <div className="portfolio-image">
                <a href="portfolio-details.html">
                  <img
                    src={portfolio11}
                    alt="Image"
                  />
                </a>
              </div>
              <div className="portfolio-content">
                <span className="sub-title">Business Consulting</span>
                <h4 className="title">
                  <a href="portfolio-details.html">
                    Digital marketing Services
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-sal="slide-up"
            data-sal-duration={1000}
            data-sal-delay={400}
          >
            <div className="tj-portfolio-item-two">
              <div className="portfolio-image">
                <a href="portfolio-details.html">
                  <img
                    src={portfolio12}
                    alt="Image"
                  />
                </a>
              </div>
              <div className="portfolio-content">
                <span className="sub-title">Business Consulting</span>
                <h4 className="title">
                  <a href="portfolio-details.html">
                    Digital marketing Services
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-sal="slide-up"
            data-sal-duration={1000}
            data-sal-delay={500}
          >
            <div className="tj-portfolio-item-two">
              <div className="portfolio-image">
                <a href="portfolio-details.html">
                  <img
                    src={portfolio13}
                    alt="Image"
                  />
                </a>
              </div>
              <div className="portfolio-content">
                <span className="sub-title">Business Consulting</span>
                <h4 className="title">
                  <a href="portfolio-details.html">
                    Digital marketing Services
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-sal="slide-up"
            data-sal-duration={1000}
            data-sal-delay={600}
          >
            <div className="tj-portfolio-item-two">
              <div className="portfolio-image">
                <a href="portfolio-details.html">
                  <img
                    src={portfolio14}
                    alt="Image"
                  />
                </a>
              </div>
              <div className="portfolio-content">
                <span className="sub-title">Business Consulting</span>
                <h4 className="title">
                  <a href="portfolio-details.html">
                    Digital marketing Services
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
