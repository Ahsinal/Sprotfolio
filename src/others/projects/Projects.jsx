import "./projects.scss";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      title: "Zebec",
      icon: <MobileFriendlyIcon />,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, dolore laboriosam fugiat debitis architecto.",
      img: "https://img.freepik.com/premium-vector/pc-hardware-shop-blue-landing-page-template-computer-equipment-internet-store-website-homepage-ui-idea-with-isometric-vector-illustrations-modern-server-technology-web-banner-dark-color-3d-concept_126283-2619.jpg?w=1060",
    },
    {
      id: "2",
      title: "Zebec Card",
      icon: <MobileFriendlyIcon />,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, dolore laboriosam fugiat debitis architecto.",

      img: "https://img.freepik.com/premium-vector/pc-hardware-shop-blue-landing-page-template-computer-equipment-internet-store-website-homepage-ui-idea-with-isometric-vector-illustrations-modern-server-technology-web-banner-dark-color-3d-concept_126283-2619.jpg?w=1060",
    },
    {
      id: "3",
      title: "Nobert",
      icon: <MobileFriendlyIcon />,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, dolore laboriosam fugiat debitis architecto.",
      img: "https://img.freepik.com/premium-vector/pc-hardware-shop-blue-landing-page-template-computer-equipment-internet-store-website-homepage-ui-idea-with-isometric-vector-illustrations-modern-server-technology-web-banner-dark-color-3d-concept_126283-2619.jpg?w=1060",
    },
    {
      id: "4",
      title: "xyz",
      icon: <MobileFriendlyIcon />,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, dolore laboriosam fugiat debitis architecto.",
      img: "https://img.freepik.com/premium-vector/pc-hardware-shop-blue-landing-page-template-computer-equipment-internet-store-website-homepage-ui-idea-with-isometric-vector-illustrations-modern-server-technology-web-banner-dark-color-3d-concept_126283-2619.jpg?w=1060",
    },
    {
      id: "5",
      title: "abc",
      icon: <MobileFriendlyIcon />,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, dolore laboriosam fugiat debitis architecto.",
      img: "https://img.freepik.com/premium-vector/pc-hardware-shop-blue-landing-page-template-computer-equipment-internet-store-website-homepage-ui-idea-with-isometric-vector-illustrations-modern-server-technology-web-banner-dark-color-3d-concept_126283-2619.jpg?w=1060",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="projects" id="projects">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 90}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <div className="icons">{d.icon} </div>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="project demo" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <ArrowBackIosIcon
        className="arrow left icons"
        alt="left arrow"
        onClick={() => handleClick("left")}
      />
      <ArrowForwardIosIcon
        className="arrow right icons"
        alt="right arrow"
        onClick={() => handleClick("")}
      />
    </div>
  );
};

export default Projects;
