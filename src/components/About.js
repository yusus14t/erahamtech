import React from "react";
import {
  ab_shape,
  about1,
  about2,
  about3,
  about4,
  shape13,
  shape37,
} from "../constant";
import Slider from "./Slider";

const About = () => {
  return (
    <main className="site-content">
      <section className="tj-about-section mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-12">
              <div className="about-image-group">
                <div className="about-circle-box">
                  <img className="circle-one" src={ab_shape} alt="Shape" />
                  <div className="ab-circle">
                    <svg
                      className="shape-1"
                      viewBox="0 0 100 100"
                      width={100}
                      height={100}
                    >
                      <defs>
                        <path
                          id="circle"
                          d="
                                            M 50, 50
                                            m -37, 0
                                            a 37,37 0 1,1 74,0
                                            a 37,37 0 1,1 -74,0"
                        />
                      </defs>
                      <text fontSize={15}>
                        <textPath xlinkHref="#circle" className="shape-1">
                          Creative Minds_, Creative Minds_
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
                <div className="about-image1 pulse">
                  <img src={about1} alt="Image" />
                </div>
                <div className="about-image2 pulse">
                  <img src={about2} alt="Image" />
                </div>
                <div className="about-image3 pulse">
                  <img src={about3} alt="Image" />
                </div>
                <div className="about-image4 pulse">
                  <img src={about4} alt="Image" />
                </div>
                <div className="about-shape1 shake-y">
                  <img src={about3} alt="Shape" />
                </div>

                <div className="about-shape3 pulse">
                  <img src={shape13} alt="Shape" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div
                className="about-content-one"
                data-sal="slide-left"
                data-sal-duration={1000}
                data-sal-delay={600}
              >
                <div className="tj-sec-heading">
                  <span className="sub-title"> About Us</span>
                  <h2 className="sec-title">
                    Making Your Business More Unique
                  </h2>
                  <div className="desc">
                    <p>
                      Welcome to EraHamTech, where innovation meets expertise in
                      IT solutions. With a commitment to excellence, we
                      specialize in cutting-edge web development, crafting
                      bespoke software solutions, and driving digital success
                      through robust digital marketing and SEO strategies.
                    </p>
                    <p>
                      Our seasoned team of developers is dedicated to
                      transforming your ideas into seamless web experiences.
                      From dynamic websites to complex custom software, we
                      tailor solutions to suit your unique business needs.
                    </p>
                    <p>
                      In the fast-evolving digital landscape, our digital
                      marketing and SEO experts ensure your online presence
                      remains not only relevant but thriving. We leverage
                      data-driven strategies to boost visibility, drive organic
                      traffic, and enhance your brand's digital footprint.
                    </p>
                    <p></p>
                  </div>
                  {/* <div className="about-button d-flex">
                    <a
                      href="about-us.html"
                      className="tj-secondary-btn btn-border"
                    >
                      <span>Read More</span>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex">
            <div className="about-image1 pulse col-md-6 col-lg-4 col-sm-12 p-2">
              <img src={about1} alt="Image" />
            </div>
            <div className=" col-sm-6 col-lg-8 d-flex justify-content-center align-items-center">
              <p className="p-4 mb-0">
                At EraHamTech, we don't just provide services; we build
                partnerships. Trust us to propel your business forward in the
                digital realm, delivering solutions that resonate, captivate,
                and drive success. Explore the possibilities with us, and let's
                shape the future of your digital journey together.
              </p>
            </div>
          </div>
        </div>
        <div className="about-section-shape pulse">
          <img src={shape37} alt="Shape" />
        </div>
      </section>
      {/* end: About Area */}
      {/* start: Testimonial Area */}
      <section className="tj-testimonial-section p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-top-area">
                <div className="tj-sec-heading">
                  <span className="sub-title">Testimonials</span>
                  <h2 className="sec-title">What Our Customer Say About Us</h2>
                </div>
                <div className="testimonial-right-content">
                  <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container testimonial-slider">
          <Slider />
        </div>
      </section>
    </main>
  );
};

export default About;
