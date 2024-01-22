import React , {useRef }from "react";
import { mail, phone, shape31, shape32, shape33, shape34 } from "../constant";

import emailjs from '@emailjs/browser';


const Contact = ({ isSpace = null }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_it4j7jg', 'template_airt6eu', form.current, 's7GXJFZL0xYkp-W_z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className={"tj-contact-section " + (isSpace && "pt-5 mt-5")}>
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
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words,
                    </p>
                  </div>
                </div>
                <div className="comntact-list">
                  <div className="contact-icon">
                    <img src={phone} alt="Icon" />
                  </div>
                  <div className="contact-header">
                    <span className="d-block">For urgent help</span>
                    <a href="tel:+919557897890">+91 9557897890</a>
                  </div>
                </div>
                <div className="comntact-list">
                  <div className="contact-icon">
                    <img src={mail} alt="Icon" />
                  </div>
                  <div className="contact-header">
                    <span className="d-block">Mail us 24/7</span>
                    <a href="mailto:erahamtech@gmail.com.com">
                      Erahamtech@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <form
                ref={form}
                onSubmit={sendEmail}
                action="#"
                className="contact-form-box"
                data-sal="slide-left"
                data-sal-duration={1000}
                data-sal-delay={300}
              >
                <div className="form-input">
                  <label>Your Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form__input"
                    placeholder=""
                    required=""
                  />
                </div>
                <div className="form-input">
                  <label>Mobile Number</label>
                  <input
                  name="mobile"
                    type="text"
                    className="form__input"
                    placeholder=""
                    required
                    inputMode="numeric"
                    maxLength={10}
                    minLength={10}
                  />
                </div>
                <div className="form-input">
                  <label>Email Address</label>
                  <input
                    name="email"
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
                    value="send"
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
    </section>
  );
};

export default Contact;
