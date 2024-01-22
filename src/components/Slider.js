// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { test4, farru, mousin, zaid, per } from "../constant";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const IsLaptopView = window.screen.availWidth > 767


export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={IsLaptopView ? 3 : 1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: false }}
      // onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="testimonial-item">
          <div className="testimonial-top-content">
            <div className="testimonial-left-content">
              <div className="auother-image auother-image-width">
                <img className="w-100" src={farru} alt="Image" />
              </div>
              <div className="auother-text">
                <h4 className="title">Farman Haseeb</h4>
              </div>
            </div>
          </div>
          <h4 className="test-title">Customers Review</h4>
          <p style={{textAlign:"justify"}}>
            Exceptional web development by EraHamTech! Our site is now
            sleek and user-friendly, reflecting our brand perfectly. Their
            attention to detail and commitment to excellence exceeded our
            expectations. Highly recommended!
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-item">
          <div className="testimonial-top-content">
            <div className="testimonial-left-content">
              <div className="auother-image  auother-image-width">
                <img src={mousin} alt="Image" />
              </div>
              <div className="auother-text">
                <h4 className="title">Mousin</h4>
                <span class="sub-title">Real State Contractor</span>

              </div>
            </div>
          </div>
          <h4 className="test-title">Customers Review</h4>
          <p style={{textAlign:"justify"}}>
            Phenomenal custom software solution by EraHamTech. They
            understood our needs, delivering a solution that streamlined our
            operations. Professionalism and expertise at its best.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="testimonial-item">
          <div class="testimonial-top-content">
            <div class="testimonial-left-content">
              <div class="auother-image  auother-image-width">
                <img src={per} alt="Image" />
              </div>
              <div class="auother-text">
                <h4 class="title">Parvez Khan</h4>
                <span class="sub-title"> Founder of Doctor Time</span>
              </div>
            </div>
          </div>
          <h4 class="test-title">Customers Review</h4>
          <p style={{textAlign:"justify"}}>
            EraHamTech is our reliable IT partner. From web development
            to custom software and digital marketing, their holistic approach
            has been instrumental in our success. Responsive and committed to
            quality solutions.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="testimonial-item">
          <div class="testimonial-top-content">
            <div class="testimonial-left-content">
              <div class="auother-image auother-image-width">
                <img src={zaid} alt="Image" />
              </div>
              <div class="auother-text">
                <h4 class="title">Mohd Zaid</h4>
                <span class="sub-title">BDE</span>
              </div>
            </div>
          </div>
          <h4 class="test-title">Customers Review</h4>
          <p style={{textAlign:"justify"}}>
            EraHamTech elevated our digital marketing efforts,
            significantly increasing online visibility and engagement. Their
            dedication and industry understanding set them apart. Grateful for
            the positive impact on our brand.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="testimonial-item">
          <div class="testimonial-top-content">
            <div class="testimonial-left-content">
              <div class="auother-image">
                <img src={test4} alt="Image" />
              </div>
              <div class="auother-text">
                <h4 class="title">Irshad Saifi</h4>
                <span class="sub-title">EV Agency</span>
              </div>
            </div>
          </div>
          <h4 class="test-title">Customers Review</h4>
          <p style={{textAlign:"justify"}}>
            EraHamTech transformed our online presence with SEO
            expertise. Increased rankings and transparent communication make
            them trustworthy partners for boosting SEO.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
