import { Container } from "react-bootstrap";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
SwiperCore.use([Navigation]);
const Projects = () => {
  const data = [
    {
      img: "https://img.freepik.com/free-photo/navigation-gps-map-location-travel-direction-website-icon-sign-symbol-illustration-3d-rendering_56104-1229.jpg?t=st=1709010334~exp=1709013934~hmac=13954014cdc36512101a89c261ad84d941e90053fdc016f37780834870ddef7a&w=1480",
      title: "Ime Pay",
      link: "/",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolore architecto fuga distinctio, ullam quia.",
    },
    {
      img: "https://img.freepik.com/free-photo/bookmark-button-front-side-white-background_187299-40257.jpg?t=st=1709010428~exp=1709014028~hmac=afe77fd68912818f3add2e4c3bfa39f434115fa6283747e3a50845264344a420&w=1060",
      title: "Global Smart Plus",
      link: "/",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolore architecto fuga distinctio, ullam quia.",
    },
    {
      img: "",
      title: "Zebec Card",
      link: "/",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolore architecto fuga distinctio, ullam quia.",
    },
    {
      img: "",
      title: "Xyz",
      link: "/",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolore architecto fuga distinctio, ullam quia.",
    },
    {
      img: "",
      title: "Siddhartha",
      link: "/",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolore architecto fuga distinctio, ullam quia.",
    },
    {
      img: "",
      title: "NIC",
      link: "/",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolore architecto fuga distinctio, ullam quia.",
    },
    {
      img: "",
      title: "Swift",
      link: "/",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolore architecto fuga distinctio, ullam quia.",
    },
    {
      img: "",
      title: "Laravel",
      link: "/",
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
    <section className="projects py-5" id="projects">
      <Container>
        <h6 className="text-prime mb-4"> Portfolio</h6>
        <Swiper
          spaceBetween={20}
          loop={true}
          ref={swiperRef}
          autoplay={{ delay: 2500 }}
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
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {data.map((d, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="project-card  p-3 position-relative rounded-3">
                  <div className="project-card-img ">
                    <img src={d.img} alt="project-img" className="img-fluid" />
                  </div>
                  <div className="project-detail px-2 mt-4">
                    <h6>{d.title}</h6>
                    <p>{d.desc}</p>
                  </div>
                  <Link
                    href={d.link}
                    target="blank"
                    className="stretched-link small text-secondary"
                  >
                    View Project
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="d-flex arrow justify-content-center gap-5 h2 mt-5 ">
          <HiArrowLongLeft onClick={goPrev} className="text-prime" />
          <HiArrowLongRight onClick={goNext} className="text-prime" />
        </div>
      </Container>
    </section>
  );
};

export default Projects;
