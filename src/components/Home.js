import React from "react";
import { Link } from "react-router-dom";
import {
  shape1,
  shape5,
  shape6,
  shape7,
  shape8,
  shape2,
  shape3,
  shape4,
  shape9,
  shape13,
  shape10,
  shape37,
  service_img1,
  shape14,
  shape15,
  shape16,
 
  hero1,
  hero2,
  scroll,
  scroll_bg,
  ab_shape,
  
  about2,
  about3,
  about4,
  about1,
 
} from "../constant";

import Slider from "./Slider";
import services from "../data/services.json";
import Contact from "./Contact";

const Home = () => {
  return (
    <main className="site-content">
      {/* start: Hero Area */}
      <section className="tj-hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div
                className="hero-left-content"
                data-sal="slide-up"
                data-sal-duration={1000}
                data-sal-delay={100}
              >
                <div className="tj-sec-heading">
                  <span className="hero-sub-title"> Creative Thinking</span>
                  <h1 className="hero-title">
                    Strategic Thinking, Tangible{" "}
                    <span className="title"> Results for Business!</span>
                  </h1>
                  <div className="desc">
                    <p>
                      Planning to Measurable Achievements, Where Vision Finds
                      its Foothold and Tangible Results are Forged with
                      Precision and Performance!"
                    </p>
                  </div>
                  <div className="hero-button d-flex">
                    <Link className="tj-primary-btn" to={"/"}>
                      Explore Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-image-group">
                <div className="group-image1 shake-y">
                  <img
                    className="image"
                    src={hero1}
                    // src="assets/images/hero/hero-1.png"
                    alt="Image"
                  />
                </div>
                <div className="group-image2 pulse">
                  <img
                    data-sal="slide-right"
                    data-sal-duration={1000}
                    data-sal-delay={100}
                    src={hero2}
                    alt="Image"
                  />
                </div>
                <img className="group-image3" src={shape5} alt="Image" />
                <img className="group-image4 pulse" src={shape6} alt="Image" />
                <img className="group-image5 pulse" src={shape7} alt="Image" />
                <img className="group-image6 pulse" src={shape8} alt="Image" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape">
          <img src={shape1} alt="Shape" />
        </div>
        <div className="hero-shape1">
          <img src={shape2} alt="Shape" />
        </div>
        <div className="hero-shape2 pulse">
          <img src={shape3} alt="Shape" />
        </div>
        <div className="hero-shape3 shake-y">
          <img src={shape4} alt="Shape" />
        </div>
        <div className="hero-scroll">
          <img src={scroll_bg} alt="Bg" />
          <div className="scroll-icon jump">
            <a href="#scroll-bottom">
              <img src={scroll} alt="Icon" />
            </a>
          </div>
        </div>
      </section>
      {/* end: Hero Area */}
      {/* start: About Area */}
      <section id="scroll-bottom" className="tj-about-section">
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
                  <img src={shape9} alt="Shape" />
                </div>
                <div className="about-shape2 pulse">
                  <img src={shape10} alt="Shape" />
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
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form,
                    </p>
                    <p>
                      by injected humour, or randomised words which don't look
                      even slightly believable.
                    </p>
                  </div>
                  <div className="about-button d-flex">
                    <Link to={"/about"} className="tj-secondary-btn btn-border">
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-section-shape pulse">
          <img src={shape37} alt="Shape" />
        </div>
      </section>
      {/* end: About Area */}

      {/* start: Service Area */}
      <section className="tj-service-section">
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
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {services
              .filter((service, index) => index <= 3)
              .map((service) => {
                return (
                  <div
                    className="col-lg-3 col-md-6 col-sm-6"
                    data-sal="slide-up"
                    data-sal-duration={1000}
                    data-sal-delay={100}
                  >
                    <div className="tj-service-item text-center">
                      <div className="service-inner">
                        <div className="service-icon">
                          {/* <FontAwesomeIcon className='fs-8' icon={faCode}/> */}
                          <img className="w-50" src={service.icon} />
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
                          <p
                            style={{ textAlign: "justify" }}
                            className="text-justify"
                          >
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            <div className="service-button text-center">
              <Link to={"/services"} className="tj-secondary-btn btn-border">
                <span>View Details</span>
              </Link>
            </div>
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
      {/* end: Service Area */}

      {/* Start: Portfolio Area */}
      {/* <section className="tj-portfolio-section inc-colum default-padding">
        <div className="container">
          <div className="row align-items-end portfolio-header">
            <div
              className="col-lg-6 sal-animate"
              data-sal="slide-right"
              data-sal-duration={1000}
              data-sal-delay={100}
            >
              <div className="tj-sec-heading">
                <span className="white-sub-title">Portfolio</span>
                <h2 className="sec-title">
                  Our Latest Work For Our Best Customer
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="filter-menu">
                <button className="filter active" data-filter="*">
                  All
                </button>
                <button className="filter" data-filter=".development">
                  Web Design
                </button>
                <button className="filter" data-filter=".marketing">
                  Digital Marketing
                </button>
                <button className="filter" data-filter=".seo">
                  SEO
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="portfolio-items-area">
            <div className="row">
              <div className="col-md-12 portfolio-content">
                <div className="portfolio-gallery masonary">
                  <div
                    id="portfolio-grid"
                    className="portfolio-items colums-3"
                    style={{ position: "relative", height: "977.575px" }}
                  >
                    <div
                      className="portfolio-single-item marketing finance"
                      style={{ position: "absolute", left: "0%", top: 0 }}
                    >
                      <div className="portfolio-single">
                        <div className="portfolio-image">
                          <a href="portfolio-details">
                            <img src={portfolio1} alt="Image" />
                          </a>
                        </div>
                        <div className="portfolio-content">
                          <h3 className="title-link">
                            <a href="portfolio-details.html">
                              Digital Marketing
                            </a>
                          </h3>
                          <span className="sub-title">Marketing/Solution</span>
                        </div>
                      </div>
                    </div>
                    <div
                className="portfolio-single-item development finance"
                style={{ position: "absolute", left: "50%", top: 0 }}
              >
                <div className="portfolio-single">
                  <div className="portfolio-image">
                    <a href="portfolio-details.html">
                      <img
                        src={portfolio4}
                        alt="Image"
                      />
                    </a>
                  </div>
                  <div className="portfolio-content">
                    <h3 className="title-link">
                      <a href="portfolio-details.html">Web Development</a>
                    </h3>
                    <span className="sub-title">Marketing/Consulting</span>
                  </div>
                </div>
              </div>
              <div
                className="portfolio-single-item capital development"
                style={{ position: "absolute", left: "50%", top: "530.775px" }}
              >
                <div className="portfolio-single">
                  <div className="portfolio-image">
                    <a href="portfolio-details.html">
                      <img
                        src={portfolio3}
                        alt="Image"
                      />
                    </a>
                  </div>
                  <div className="portfolio-content">
                    <h3 className="title-link">
                      <a href="portfolio-details.html">UX/UI Design</a>
                    </h3>
                    <span className="sub-title">Marketing/Solution</span>
                  </div>
                </div>
              </div>
              <div
                className="portfolio-single-item capital seo"
                style={{ position: "absolute", left: "0%", top: "545.537px" }}
              >
                <div className="portfolio-single">
                  <div className="portfolio-image">
                    <a href="portfolio-details.html">
                      <img
                        src={portfolio2}
                        alt="Image"
                      />
                    </a>
                  </div>
                  <div className="portfolio-content">
                    <h3 className="title-link">
                      <a href="portfolio-details.html"> Branding &amp; SEO </a>
                    </h3>
                    <span className="sub-title">
                      Marketing/ Desing Solution
                    </span>
                  </div>
                </div>
              </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-section-shape">
          <div className="portfolio-bg-shape">
            <img src={portfolio_shape} alt="Shape" />
          </div>
          <div className="portfolio-bg-shape1">
            <img src={portfolio_shape1} alt="Shape" />
          </div>
          <div className="portfolio-bg-shape2 shake-y">
            <img src={shape19} alt="Shape" />
          </div>
          <div className="portfolio-bg-shape3 pulse">
            <img src={shape20} alt="Shape" />
          </div>
          <div className="portfolio-bg-shape4 shake-y">
            <img src={shape19} alt="Shape" />
          </div>
          <div className="portfolio-bg-shape5 pulse">
            <img src={shape23} alt="Shape" />
          </div>
          <div className="portfolio-bg-shape6 pulse">
            <img src={shape38} alt="Shape" />
          </div>
        </div>
      </section> */}

      {/* end: Portfolio Area */}

      {/* start: Testimonial Area */}
      <section className="tj-testimonial-section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-top-area">
                <div className="tj-sec-heading">
                  <span className="sub-title">Testimonials</span>
                  <h2 className="sec-title">What Our Customer Say About Us</h2>
                </div>
                {/* <div className="testimonial-right-content">
                  <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container testimonial-slider">
          <Slider />
        </div>
      </section>
      {/* end: Testimonial Area */}

      {/* start: Contact Area */}
      {/* <section className="tj-contact-section pt-0">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="contact-form-area">
            <div
              className="contact-left-content"
              data-sal="slide-right"
              data-sal-duration={1000}
              data-sal-delay={300}
            >
              <div className="tj-sec-heading">
                <span className="sub-title">Get In touch</span>
                <h2 className="sec-title">
                  Have any Project Plan In your Mind?
                </h2>
                <div className="desc">
                  <p>
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary, making this the first
                    true generator on the Internet. It uses a dictionary of over
                    200 Latin words,
                  </p>
                </div>
              </div>
              <div className="comntact-list">
                <div className="contact-icon">
                  <img src={phone} alt="Icon" />
                </div>
                <div className="contact-header">
                  <span className="d-block">For urgent help</span>
                  <a href="tel:+919557897890">+919557897890</a>
                </div>
              </div>
              <div className="comntact-list">
                <div className="contact-icon">
                  <img src={mail} alt="Icon" />
                </div>
                <div className="contact-header">
                  <span className="d-block">Mail us 24/7</span>
                  <a href="mailto:Erahamtech@gmail.com">Erahamtech@gmail.com</a>
                </div>
              </div>
            </div>
            <form
              action="#"
              className="contact-form-box"
              data-sal="slide-left"
              data-sal-duration={1000}
              data-sal-delay={300}
            >
              <div className="form-input">
                <label>Your Name</label>
                <input
                  type="text"
                  className="form__input"
                  placeholder=""
                  required=""
                />
              </div>
              <div className="form-input">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form__input"
                  placeholder=""
                  required=""
                />
              </div>
              <div className="form-textarea">
                <label>How can help you?</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder=""
                  defaultValue={""}
                />
              </div>
              <div className="tj-contact-button">
                <button
                  className="btn tj-primary-btn"
                  type="submit"
                  value="submit"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="contact-section-shape">
      <div className="contact-bg-shape shake-y">
        <img src={shape31} alt="Shape" />
      </div>
      <div className="contact-bg-shape1 pulse">
        <img src={shape32} alt="Shape" />
      </div>
      <div className="contact-bg-shape2 pulse">
        <img src={shape33} alt="Shape" />
      </div>
      <div className="contact-bg-shape3 shake-y">
        <img src={shape34} alt="Shape" />
      </div>
    </div>
  </section> */}
      <Contact />
      {/* end: Contact Area */}
    </main>
  );
};

export default Home;
