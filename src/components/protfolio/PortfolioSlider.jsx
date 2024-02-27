import { Container } from "react-bootstrap";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
SwiperCore.use([Navigation]);
const PortfolioSlider = () => {
  const data = [
    {
      img: "https://img.freepik.com/free-photo/navigation-gps-map-location-travel-direction-website-icon-sign-symbol-illustration-3d-rendering_56104-1229.jpg?t=st=1709010334~exp=1709013934~hmac=13954014cdc36512101a89c261ad84d941e90053fdc016f37780834870ddef7a&w=1480",
      title: "Ime Pay",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolore architecto fuga distinctio, ullam quia.",
    },
    {
      img: "https://img.freepik.com/free-photo/bookmark-button-front-side-white-background_187299-40257.jpg?t=st=1709010428~exp=1709014028~hmac=afe77fd68912818f3add2e4c3bfa39f434115fa6283747e3a50845264344a420&w=1060",
      title: "Global Smart Plus",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolore architecto fuga distinctio, ullam quia.",
    },
    {
      img: "",
      title: "Zebec Card",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolore architecto fuga distinctio, ullam quia.",
    },
    {
      img: "",
      title: "Xyz",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolore architecto fuga distinctio, ullam quia.",
    },
    {
      img: "",
      title: "Siddhartha",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolore architecto fuga distinctio, ullam quia.",
    },
    {
      img: "",
      title: "NIC",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolore architecto fuga distinctio, ullam quia.",
    },
    {
      img: "",
      title: "Swift",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolore architecto fuga distinctio, ullam quia.",
    },
    {
      img: "",
      title: "Laravel",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolore architecto fuga distinctio, ullam quia.",
    },
  ];
  const swiperRef = React.useRef(null);
  const goNext = () => {
    // if (swiperRef.current && swiperRef.current.swiper) {
    //   swiperRef.current.swiper.slideNext();
    // }
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <section className="projects-section py-5" id="projects">
      <Container>
        <div className="d-flex justify-content-between align-items-center ">
          <h6 style={{ color: "rgb(31, 37, 128)" }}> Portfolio</h6>
          <div
            className="d-flex gap-3 h4"
            style={{ color: "rgb(31, 37, 128)" }}
          >
            <FaArrowAltCircleLeft onClick={goPrev} />
            <FaArrowAltCircleRight onClick={goNext} />
          </div>
        </div>
        <Swiper
          spaceBetween={20}
          loop={true}
          ref={swiperRef}
          // autoplay={{ delay: 2500 }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          {data.map((d, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="project-card  p-3 position-relative">
                  <div className="project-card-img ">
                    <img src={d.img} alt="project-img" className="img-fluid" />
                  </div>
                  <div className="project-detail px-2 mt-4">
                    <h6>{d.title}</h6>
                    <p>{d.desc}</p>
                  </div>
                  <a className="stretched-link"></a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </section>
  );
};

export default PortfolioSlider;
