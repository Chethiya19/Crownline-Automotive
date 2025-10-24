import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel as BootstrapCarousel } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import aboutImage from "../assets/aboutimage.jpg";

import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";
import car5 from "../assets/car5.jpg";

import brand1 from "../assets/brand/brand1.png";
import brand2 from "../assets/brand/brand2.png";
import brand3 from "../assets/brand/brand3.png";
import brand4 from "../assets/brand/brand4.png";
import brand5 from "../assets/brand/brand5.png";
import brand6 from "../assets/brand/brand6.png";
import brand7 from "../assets/brand/brand7.png";
import brand8 from "../assets/brand/brand8.png";
import brand9 from "../assets/brand/brand9.png";
import brand10 from "../assets/brand/brand10.png";
import brand11 from "../assets/brand/brand11.png";
import brand12 from "../assets/brand/brand12.png";
import brand13 from "../assets/brand/brand13.png";
import brand14 from "../assets/brand/brand14.png";
import brand15 from "../assets/brand/brand15.png";


import videoFile from "../assets/video.mp4";

import carvideo1 from "../assets/carvideo1.mp4";
import carvideo2 from "../assets/carvideo2.mp4";
import carvideo3 from "../assets/carvideo3.mp4";
import carvideo4 from "../assets/carvideo4.mp4";
import carvideo5 from "../assets/carvideo5.mp4";

import "./Home.css";

const sliderImages = [
  {
    src: car1,
    alt: "Luxury Car Import",
    caption: "Drive Your Dream Car",
    text: "We import luxury and premium cars from around the world at the best prices.",
    link: "/import",
  },
  {
    src: car2,
    alt: "Car Selling",
    caption: "Buy & Sell Cars Easily",
    text: "List your car for sale or find your perfect match from trusted sellers.",
    link: "/sell",
  },
  {
    src: car3,
    alt: "Car Financing",
    caption: "Affordable Financing",
    text: "Get the best car financing and leasing solutions tailored to you.",
    link: "/finance",
  },
  {
    src: car4,
    alt: "Premium SUV",
    caption: "Experience Power & Comfort",
    text: "Explore our range of premium SUVs combining luxury, performance, and safety.",
    link: "/suvs",
  },
  {
    src: car5,
    alt: "Electric Car Showcase",
    caption: "Experience the Future of Driving",
    text: "Discover state-of-the-art electric cars with zero emissions and top performance.",
    link: "/electric-cars",
  },
];

function HomeCarousel() {
  useEffect(() => {
    const carousel = document.getElementById("homeCarousel");
    if (carousel) {
      const carouselInstance = new BootstrapCarousel(carousel, {
        interval: 3000,
        ride: "carousel",
      });

      const captions = carousel.querySelectorAll(".carousel-caption");

      function handleSlide() {
        captions.forEach((caption) =>
          caption.classList.remove("animate-slideup")
        );
        const activeItem = carousel.querySelector(".carousel-item.active");
        if (activeItem) {
          const activeCaption = activeItem.querySelector(".carousel-caption");
          if (activeCaption) {
            activeCaption.classList.remove("animate-slideup");
            void activeCaption.offsetWidth;
            activeCaption.classList.add("animate-slideup");
          }
        }
      }

      handleSlide();
      carousel.addEventListener("slid.bs.carousel", handleSlide);

      return () => {
        carouselInstance.dispose();
        carousel.removeEventListener("slid.bs.carousel", handleSlide);
      };
    }
  }, []);

  return (
    <>
      {/* Carousel */}
      <div
        id="homeCarousel"
        className="carousel slide carousel-fade full-width-carousel carousel-wrapper"
      >
        <div className="carousel-inner">
          {sliderImages.map(({ src, alt, caption, text, link }, index) => (
            <div
              key={index}
              className={`carousel-item${index === 0 ? " active" : ""}`}
            >
              <div className="position-relative">
                <img
                  src={src}
                  className="d-block w-100"
                  alt={alt}
                  style={{ height: "600px", objectFit: "cover" }}
                />
                <div
                  className={`carousel-caption text-start ${index === 0 ? "animate-slideup" : ""
                    }`}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "50px",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                    color: "#fff",
                  }}
                >
                  <div style={{ maxWidth: "600px" }}>
                    <h2 className="display-4 fw-bold mb-3">{caption}</h2>
                    <p className="lead mb-4">{text}</p>
                    <Link
                      to={link}
                      className="btn btn-primary btn-lg shadow-sm custom-hover-btn"
                    >
                      Discover More <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Brand Slider */}
      <section className="brand-slider py-3">
        <div className="brand-slider-track">
          {[brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11, brand12, brand13, brand14, brand15].concat([brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11, brand12, brand13, brand14, brand15]).map(
            (brand, index) => (
              <div className="brand-item" key={index}>
                <img src={brand} alt={`Brand ${index + 1}`} />
              </div>
            )
          )}
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section my-5">
        <div className="container text-center">
          <video
            className="w-100 rounded shadow"
            src={videoFile}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "530px",
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      {/* 5 Portrait Videos Section */}
      <section
        className="portrait-videos-section my-5"
        style={{ backgroundColor: "#bebebeff", padding: "20px 0" }}
      >
        <div className="container-fluid">
          <div className="row justify-content-center">
            {[carvideo1, carvideo2, carvideo3, carvideo4, carvideo5].map((video, index) => (
              <div className="col-5th video-col" key={index}>
                <video
                  className="w-100"
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    height: "500px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-section py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Content */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-3">About Us</h2>
              <p className="lead">
                At Crownline Automotive, we are passionate about connecting people
                with the perfect vehicle. From luxury imports to SUVs and electric
                cars, we make your automotive dreams a reality.
              </p>
              <p>
                Our mission is to provide a seamless car buying, selling, and
                financing experience. We work with trusted partners globally to
                offer premium vehicles at the best prices — all tailored to your
                needs.
              </p>
              <Link
                to="/about"
                className="btn btn-primary btn-lg mt-3"
              >
                Learn More
              </Link>
            </div>

            {/* Image */}
            <div className="col-lg-6">
              <img
                src={aboutImage}
                alt="About Us"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeCarousel;
