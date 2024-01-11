import React from "react";
import { portfolio_shape, portfolio_shape2, shape10, shape9 } from "../constant";

const Portfolio = () => {
  return (
    <section className="tj-portfolio-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="portfolio-wrapper">
              <div className="portfolio-lg-image">
                <img
                  src={portfolio_shape2}
                  alt="Image"
                />
              </div>
              <div className="tagcloud">
                <a href="#">
                  <i className="flaticon-client" /> Client Name
                </a>
                <a href="#">
                  <i className="flaticon-categories" /> Categories
                </a>
                <a href="#">
                  <i className="flaticon-completed-task" /> Project Name
                </a>
              </div>
              <div className="portfolio-content">
                <h3 className="title">Business Solution</h3>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus. Temporibus autem quibusdam.
                </p>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.
                </p>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus. Temporibus autem quibusdam.
                </p>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="portfolio-left-content">
                      <h3 className="title">
                        This event will allow participants to:
                      </h3>
                      <div className="check-list">
                        <ul>
                          <li>
                            <i className="fa-light fa-angle-right" /> Business’s
                            managers, Ieaders
                          </li>
                          <li>
                            <i className="fa-light fa-angle-right" />{" "}
                            Downloadable lectures, code and design assets for
                            all projects
                          </li>
                          <li>
                            <i className="fa-light fa-angle-right" />{" "}
                            Downloadable lectures, code and design assets for
                            all projects
                          </li>
                        </ul>
                      </div>
                      <p>
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus, omnis voluptas assumenda est, omnis
                        dolor repellendus. Temporibus autem quibusdam.
                      </p>
                      <p>
                        "On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment, so
                        blinded by desire, that they cannot foresee the pain and
                        trouble that are bound to ensue; and equal blame belongs
                        to those who fail in their duty through weakness of
                        will, which is the same as saying through shrinking from
                        toil and pain. These cases are perfectly simple and easy
                        to distinguish. In a free hour, when our power of choice
                        is untrammelled and when nothing prevents our being able
                        to do what we like best, every pleasure is to be
                        welcomed and every pain avoided. But in certain
                        circumstances and owing to the claims of duty or the
                        obligations of business it will frequently occur that
                        pleasures have to be repudiated and annoyances accepted.
                        The wise man therefore always holds in these matters to
                        this principle of selection: he rejects pleasures to
                        secure other greater pleasures, or else he endures pains
                        to avoid worse pains."
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="need-title d-flex">
                      <a className="tj-primary-btn" href="contact.html">
                        {" "}
                        Need This Project?
                      </a>
                    </div>
                    <div className="sidebar-contact">
                      <div className="contact-item">
                        <div className="contact-icon">
                          <i className="flaticon-maps-and-flags" />
                        </div>
                        <div className="contact-content">
                          <h4 className="title">Our Address</h4>
                          <span>
                            Level 13,2 Elizabeth St, Melbourene victoria 300
                          </span>
                        </div>
                      </div>
                      <div className="contact-item">
                        <div className="contact-icon">
                          <i className="flaticon-phone-with-wire" />
                        </div>
                        <div className="contact-content">
                          <h4 className="title">Contact Way</h4>
                          <span>
                            Deanna.Curtis@Example.com. (123) 1234 5678 900
                          </span>
                        </div>
                      </div>
                      <div className="contact-item">
                        <div className="contact-icon">
                          <i className="flaticon-clock" />
                        </div>
                        <div className="contact-content">
                          <h4 className="title">Open Houres</h4>
                          <span>mon-sat (8.00am - 600.pm) Sunday - Closed</span>
                        </div>
                      </div>
                      <div className="contact-share">
                        <ul className="dot-style">
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.51962 6.1948L13.8489 0H12.586L7.95861 5.37887L4.26275 0H0L5.58887 8.13379L0 14.63H1.26293L6.14957 8.94974L10.0527 14.63H14.3154L8.51929 6.1948H8.51962ZM1.71797 0.950725H3.65775L12.5866 13.7225H10.6468L1.71797 0.950725Z"
                                  fill="#161616"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-facebook-f" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="contact-svg">
                        <img
                          src={portfolio_shape}
                          alt="Shape"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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

export default Portfolio;
