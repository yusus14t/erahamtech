import React from 'react'
import { footer_bg_shape, footer_bg_shape1, shape35, shape36 } from '../constant'

const Footer = () => {
  return (
    <footer className="tj-footer-area">
  <div className="copyright-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="copyright-content-area justify-content-center">
            <div className="copyright-left-content">
              <p>
                Copyright © 2024 &nbsp;
                <a href="#" >
               
                  Erahamtech.
                </a> &nbsp;
                All Rights Reserved.
              </p>
            </div>
            {/* <div className="copyright-menu">
              <ul>
                <li>
                  <a href="#">Setting &amp; Privacy</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-section-shape">
    <div className="footer-bg-shape">
      <img src={footer_bg_shape} alt="Shape" />
    </div>
    <div className="footer-bg-shape1">
      <img src={footer_bg_shape1} alt="Shape" />
    </div>
    <div className="footer-bg-shape2 shake-y">
      <img src={shape35} alt="Shape" />
    </div>
    <div className="footer-bg-shape3 pulse">
      <img src={shape36} alt="Shape" />
    </div>
  </div>
</footer>

  )
}

export default Footer