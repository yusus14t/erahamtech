import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default ({ images }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {images.map((img) => (
        <SwiperSlide>
          <div style={{
            height:"50vh"
            
          }}>
            <img
            style={{
                width:"100%",
                height:"100%",
                aspectRatio:"16/9",
                objectFit:"contain"
            }}
             src={img} loading="lazy" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
