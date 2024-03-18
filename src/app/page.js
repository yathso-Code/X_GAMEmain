"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'
import "./globals.css";
import Navbar from "../../component/Navbar";
import Image from "next/image";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Footer from '../../component/Footer';


export default function Home() {
   
  document.addEventListener("DOMContentLoaded", function () {
    "use strict";
  
    // Preloader
    window.addEventListener("load", function () {
      document.querySelector(".preloader").classList.add("fadeOut");
      new WOW().init();
    });
  
    // Hide preloader on click
    if (document.querySelector(".preloader")) {
      document.querySelectorAll(".preloaderCls").forEach(function (element) {
        element.addEventListener("click", function (event) {
          event.preventDefault();
          document.querySelector(".preloader").style.display = "none";
        });
      });
    }
  
    // Mobile Menu
    document.querySelector(".th-menu-wrapper").thmobilemenu();
  
    // Sticky header
    window.addEventListener("scroll", function () {
      if (window.scrollY > 500) {
        document.querySelector(".sticky-wrapper").classList.add("sticky");
        document.querySelector(".category-menu").classList.add("close-category");
      } else {
        document.querySelector(".sticky-wrapper").classList.remove("sticky");
        document.querySelector(".category-menu").classList.remove("close-category");
      }
    });
  
    // Menu expand
    document.querySelectorAll(".menu-expand").forEach(function (element) {
      element.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector(".category-menu").classList.toggle("open-category");
      });
    });
  
    // Scroll to top button
    if (document.querySelector(".scroll-top")) {
      let scrollTop = document.querySelector(".scroll-top");
      let path = document.querySelector(".scroll-top path");
      let pathLength = path.getTotalLength();
      path.style.transition = path.style.WebkitTransition = "none";
      path.style.strokeDasharray = pathLength + " " + pathLength;
      path.style.strokeDashoffset = pathLength;
      path.getBoundingClientRect();
      path.style.transition = path.style.WebkitTransition = "stroke-dashoffset 10ms linear";
      let handleScroll = function () {
        let scrollPosition = window.scrollY;
        let documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        let scrollPercentage = (scrollPosition * pathLength) / documentHeight;
        path.style.strokeDashoffset = pathLength - scrollPercentage;
      };
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          scrollTop.classList.add("show");
        } else {
          scrollTop.classList.remove("show");
        }
      });
      scrollTop.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  
    // Lazy load background images
    if (document.querySelectorAll("[data-bg-src]").length > 0) {
      document.querySelectorAll("[data-bg-src]").forEach(function (element) {
        let bgSrc = element.getAttribute("data-bg-src");
        element.style.backgroundImage = "url(" + bgSrc + ")";
        element.removeAttribute("data-bg-src");
        element.classList.add("background-image");
      });
    }
  
    // Set background color
    if (document.querySelectorAll("[data-bg-color]").length > 0) {
      document.querySelectorAll("[data-bg-color]").forEach(function (element) {
        let bgColor = element.getAttribute("data-bg-color");
        element.style.backgroundColor = bgColor;
        element.removeAttribute("data-bg-color");
      });
    }
  
    // Set border color
    if (document.querySelectorAll("[data-border]").length > 0) {
      document.querySelectorAll("[data-border]").forEach(function (element) {
        let borderColor = element.dataset.border;
        element.style.setProperty("--th-border-color", borderColor);
      });
    }
  
    // Load SVG images inline
    if (document.querySelectorAll(".svg-img").length > 0) {
      const svgImages = document.querySelectorAll(".svg-img");
      const svgCache = {};
      svgImages.forEach(function (svgImage) {
        const src = svgImage.src;
        if (!svgCache[src]) {
          const promise = new Promise(function (resolve) {
            fetch(src)
              .then((response) => response.text())
              .then((text) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(text, "image/svg+xml");
                const svg = doc.documentElement;
                svgImage.insertAdjacentElement("afterend", svg);
                svgCache[src] = svg;
                resolve();
              });
          });
          svgCache[src] = promise;
        }
      });
    }
  
    // Activate Swiper sliders
    if (document.querySelectorAll(".th-slider").length > 0) {
      document.querySelectorAll(".th-slider").forEach(function (slider) {
        const sliderOptions = slider.dataset.sliderOptions ? JSON.parse(slider.dataset.sliderOptions) : {};
        const swiper = new Swiper(slider, sliderOptions);
        if (document.querySelectorAll(".slider-area").length > 0) {
          document.querySelectorAll(".slider-area").forEach(function (sliderArea) {
            sliderArea.closest(".container").parentNode.classList.add("arrow-wrap");
          });
        }
      });
    }
  
    // Activate countdown timers
    if (document.querySelectorAll(".counter-list").length > 0) {
      document.querySelectorAll(".counter-list").forEach(function (counter) {
        let offerDate = new Date(counter.dataset.offerDate).getTime();
        let countdownInterval = setInterval(function () {
          let currentTime = new Date().getTime();
          let timeDifference = offerDate - currentTime;
          let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
          if (timeDifference < 0) {
            clearInterval(countdownInterval);
            counter.classList.add("expired");
            counter.querySelector(".message").style.display = "block";
          } else {
            counter.querySelector(".day").innerHTML = days < 10 ? "0" + days : days;
            counter.querySelector(".hour").innerHTML = hours < 10 ? "0" + hours : hours;
            counter.querySelector(".minute").innerHTML = minutes < 10 ? "0" + minutes : minutes;
            counter.querySelector(".seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
          }
        }, 1000);
      });
    }
  
    // Initialize lettering.js
    if (document.querySelector(".circle-title-anime")) {
      document.querySelectorAll(".circle-title-anime").forEach(function (element) {
        element.classList.add("char");
      });
    }
  
    // Cursor animation
    const cursor = document.querySelector(".cursor");
    let cursorX = 0;
    let cursorY = 0;
    let pageX = 0;
    let pageY = 0;
  
    function animateCursor() {
      let distX = pageX - cursorX;
      let distY = pageY - cursorY;
      cursorX = cursorX + distX / 8;
      cursorY = cursorY + distY / 8;
      cursor.style.left = cursorX - 12 + "px";
      cursor.style.top = cursorY - 12 + "px";
      requestAnimationFrame(animateCursor);
    }
  
    animateCursor();
  
    window.addEventListener("mousemove", function (event) {
      pageX = event.pageX;
      pageY = event.pageY;
    });
  
    document.querySelectorAll(".btn").forEach(function (element) {
      element.addEventListener("mouseenter", function () {
        cursor.classList.add("active");
      });
      element.addEventListener("mouseleave", function () {
        cursor.classList.remove("active");
      });
    });
  
    // Prevent context menu
    window.addEventListener("contextmenu", function (event) {
      event.preventDefault();
    });
  
    // Prevent key combinations
    document.onkeydown = function (event) {
      if (event.ctrlKey && event.shiftKey && event.keyCode === "I".charCodeAt(0)) {
        return false;
      }
      if (event.ctrlKey && event.shiftKey && event.keyCode === "C".charCodeAt(0)) {
        return false;
      }
      if (event.ctrlKey && event.shiftKey && event.keyCode === "J".charCodeAt(0)) {
        return false;
      }
      if (event.ctrlKey && event.keyCode === "U".charCodeAt(0)) {
        return false;
      }
    };
  });
  



  return (
    <>
      <Navbar />
      {/* ===========================================hero banner==================================================== */}
      <div
        className="th-hero-wrapper hero-1"
        id="hero"
        style={{ backgroundImage: `url('/hero-bg1-1.png')` , height: '467px'}}

      >
        <div className="container">
          <div className="hero-style1 text-center">
            <span
              className="sub-title custom-anim-top wow animated"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              # World Class eSports & Gaming Site
            </span>
            <h1 className="hero-title">
              <span
                className="title1 custom-anim-top wow animated"
                data-wow-duration="1.1s"
                data-wow-delay="0.3s"
                style={{ backgroundImage: `url('/hero-title-bg-shape1.svg')` }}
                // data-bg-src="assets/img/hero/hero-title-bg-shape1.svg"
              >
                SHAPING THE FUTURE OF
              </span>{" "}
              <span
                className="title2 custom-anim-top wow animated"
                data-wow-duration="1.1s"
                data-wow-delay="0.4s"
              >
                ESPORTS
              </span>
            </h1>
            <div
              className="btn-group custom-anim-top wow animated"
              data-wow-duration="1.2s"
              data-wow-delay="0.7s"
            >
              <a href="about.html" className="th-btn">
                EXPLORE MORE <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
              <a href="tournament.html" className="th-btn style2">
                BROWSE GAMES <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ========================================hero banner end====================================================== */}

      <div
        className="swiper th-slider hero-cta-slider1"
        id="heroSlider1"
        data-slider-options='{"effect":"fade"}'
        style={{ marginTop: '0', backgroundColor: 'black'}}
        
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="hero-cta-inner">
              <div className="container th-container2">
                <div className="hero-shape-area">
                  <div className="hero-bg-shape">
                    <div
                      className="hero-bg-border-anime"
                      style={{ backgroundImage: `url('/hero-bg-shape.png')` }}
                      // data-mask-src="assets/img/hero/hero-bg-shape.png"
                    ></div>
                    <svg
                      viewBox="0 0 1600 520"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1599 30V490C1599 506.016 1586.02 519 1570 519H1062.43C1054.74 519 1047.36 515.945 1041.92 510.506L1009.49 478.08C1003.68 472.266 995.795 469 987.574 469H612.426C604.205 469 596.32 472.266 590.506 478.08L558.08 510.506C552.641 515.945 545.265 519 537.574 519H30C13.9837 519 1 506.016 1 490V30C1 13.9837 13.9837 1 30 1H400H537.574C545.265 1 552.641 4.05535 558.08 9.4939L590.506 41.9203C596.32 47.7339 604.205 51 612.426 51H987.574C995.795 51 1003.68 47.7339 1009.49 41.9203L1041.92 9.4939C1047.36 4.05535 1054.74 1 1062.43 1H1200H1570C1586.02 1 1599 13.9837 1599 30Z"
                        fill="black"
                        stroke="url(#paint0_linear1_47_22)"
                        stroke-width="2"
                      />
                      <mask
                        id="mask0_47_22"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                      >
                        <path
                          d="M1600 490V30C1600 13.4315 1586.57 0 1570 0H1200H1062.43C1054.47 0 1046.84 3.1607 1041.21 8.7868L1008.79 41.2132C1003.16 46.8393 995.53 50 987.574 50H612.426C604.47 50 596.839 46.8393 591.213 41.2132L558.787 8.7868C553.161 3.16071 545.53 0 537.574 0H400H30C13.4315 0 0 13.4314 0 30V490C0 506.569 13.4315 520 30 520H537.574C545.53 520 553.161 516.839 558.787 511.213L591.213 478.787C596.839 473.161 604.47 470 612.426 470H987.574C995.53 470 1003.16 473.161 1008.79 478.787L1041.21 511.213C1046.84 516.839 1054.47 520 1062.43 520H1570C1586.57 520 1600 506.569 1600 490Z"
                          fill="black"
                        />
                      </mask>
                      <g mask="url(#mask0_47_22)">
                        <g filter="url(#filter0_f_47_22)">
                          <circle
                            cx="1413"
                            cy="314"
                            r="287"
                            fill="var(--theme-color2)"
                            fill-opacity="0.2"
                          />
                        </g>
                        <g filter="url(#filter01_f_47_22)">
                          <circle
                            cx="231"
                            cy="172"
                            r="229"
                            fill="var(--theme-color)"
                            fill-opacity="0.5"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_f_47_22"
                          x="566"
                          y="-533"
                          width="1694"
                          height="1694"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="280"
                            result="effect1_foregroundBlur_47_22"
                          />
                        </filter>
                        <filter
                          id="filter01_f_47_22"
                          x="-558"
                          y="-617"
                          width="1578"
                          height="1578"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="280"
                            result="effect1_foregroundBlur_47_22"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear1_47_22"
                          x1="0"
                          y1="0"
                          x2="1600"
                          y2="520"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="var(--theme-color)" />
                          <stop offset="1" stop-color="var(--theme-color2)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="verses-thumb d-xl-none d-block">
                      <img
                        src="/game-vs1.svg"
                        alt="tournament image"
                      />
                    </div>
                    <div
                      className="hero-img1 z-index-common"
                      data-ani="slideinleft"
                      data-ani-delay="0.4s"
                    >
                      <img src="/hero-1-1.png" alt="Image" />
                    </div>
                    <div
                      className="hero-img2 z-index-common"
                      data-ani="slideinright"
                      data-ani-delay="0.4s"
                    >
                      <img src="/hero-1-2.png" alt="Image" />
                    </div>
                  </div>
                  <div className="title-area mb-0">
                    <h2
                      className="sec-title text-white custom-anim-top wow animated"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.1s"
                    >
                      Join The Big Tournaments
                    </h2>
                    <p
                      className="mt-30 mb-30 custom-anim-top wow animated"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.2s"
                    >
                      1Beyond esports tournaments, include a broader calendar of
                      gaming events, conferences, and conventions. and connect
                      with each other.
                    </p>
                    <div
                      className="btn-group custom-anim-top wow animated"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.2s"
                    >
                      <a href="about.html" className="th-btn style-border">
                        <span className="btn-border">
                          JOIN NOW
                      
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="hero-cta-inner">
              <div className="container th-container2">
                <div className="hero-shape-area">
                  <div className="hero-bg-shape">
                    <div
                      className="hero-bg-border-anime"
                      
                      style={{ backgroundImage: `url('/hero-bg-shape.png')` }}
                      // data-mask-src="assets/img/hero/hero-bg-shape.png"
                    ></div>
                    <svg
                      viewBox="0 0 1600 520"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1599 30V490C1599 506.016 1586.02 519 1570 519H1062.43C1054.74 519 1047.36 515.945 1041.92 510.506L1009.49 478.08C1003.68 472.266 995.795 469 987.574 469H612.426C604.205 469 596.32 472.266 590.506 478.08L558.08 510.506C552.641 515.945 545.265 519 537.574 519H30C13.9837 519 1 506.016 1 490V30C1 13.9837 13.9837 1 30 1H400H537.574C545.265 1 552.641 4.05535 558.08 9.4939L590.506 41.9203C596.32 47.7339 604.205 51 612.426 51H987.574C995.795 51 1003.68 47.7339 1009.49 41.9203L1041.92 9.4939C1047.36 4.05535 1054.74 1 1062.43 1H1200H1570C1586.02 1 1599 13.9837 1599 30Z"
                        fill="black"
                        stroke="url(#paint0_linear2_47_22)"
                        stroke-width="2"
                      />
                      <mask
                      id="mask0_47_22"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                    >
                        <path
                          d="M1600 490V30C1600 13.4315 1586.57 0 1570 0H1200H1062.43C1054.47 0 1046.84 3.1607 1041.21 8.7868L1008.79 41.2132C1003.16 46.8393 995.53 50 987.574 50H612.426C604.47 50 596.839 46.8393 591.213 41.2132L558.787 8.7868C553.161 3.16071 545.53 0 537.574 0H400H30C13.4315 0 0 13.4314 0 30V490C0 506.569 13.4315 520 30 520H537.574C545.53 520 553.161 516.839 558.787 511.213L591.213 478.787C596.839 473.161 604.47 470 612.426 470H987.574C995.53 470 1003.16 473.161 1008.79 478.787L1041.21 511.213C1046.84 516.839 1054.47 520 1062.43 520H1570C1586.57 520 1600 506.569 1600 490Z"
                          fill="black"
                        />
                      </mask>
                      <g mask="url(#mask1_47_22)">
                        <g filter="url(#filter1_f_47_22)">
                          <circle
                            cx="1413"
                            cy="314"
                            r="287"
                            fill="var(--theme-color2)"
                            fill-opacity="0.2"
                          />
                        </g>
                        <g filter="url(#filter02_f_47_22)">
                          <circle
                            cx="231"
                            cy="172"
                            r="229"
                            fill="var(--theme-color)"
                            fill-opacity="0.5"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter1_f_47_22"
                          x="566"
                          y="-533"
                          width="1694"
                          height="1694"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="280"
                            result="effect1_foregroundBlur_47_22"
                          />
                        </filter>
                        <filter
                          id="filter02_f_47_22"
                          x="-558"
                          y="-617"
                          width="1578"
                          height="1578"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="280"
                            result="effect1_foregroundBlur_47_22"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear2_47_22"
                          x1="0"
                          y1="0"
                          x2="1600"
                          y2="520"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="var(--theme-color)" />
                          <stop offset="1" stop-color="var(--theme-color2)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="verses-thumb d-xl-none d-block">
                      <img
                        src="/game-vs1.svg"
                        alt="tournament image"
                      />
                    </div>
                    <div
                      className="hero-img1 z-index-common"
                      data-ani="slideinleft"
                      data-ani-delay="0.4s"
                    >
                      <img src="/hero-1-3.png" alt="Image" />
                    </div>
                    <div
                      className="hero-img2 z-index-common"
                      data-ani="slideinright"
                      data-ani-delay="0.4s"
                    >
                      <img src="/hero-1-4.png" alt="Image" />
                    </div>
                  </div>
                  <div className="title-area mb-0">
                    <h2
                      className="sec-title text-white custom-anim-top wow animated"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.1s"
                    >
                      Join The Big Tournaments
                    </h2>
                    <p
                      className="mt-30 mb-30 custom-anim-top wow animated"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.2s"
                    >
                      Beyond esports tournaments, include a broader calendar of
                      gaming events, conferences, and conventions. and connect
                      with each other.
                    </p>
                    <div
                      className="btn-group custom-anim-top wow animated"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.2s"
                    >
                      <a href="about.html" className="th-btn style-border">
                        <span className="btn-border">
                          JOIN NOWf
                        
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="hero-cta-inner">
              <div className="container th-container2">
                <div className="hero-shape-area">
                  <div className="hero-bg-shape">
                    <div
                      className="hero-bg-border-anime"
                      style={{ backgroundImage: `url('/hero-bg-shape.png')` }}
                      // data-mask-src="assets/img/hero/hero-bg-shape.png"
                    ></div>
                    <svg
                      viewBox="0 0 1600 520"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1599 30V490C1599 506.016 1586.02 519 1570 519H1062.43C1054.74 519 1047.36 515.945 1041.92 510.506L1009.49 478.08C1003.68 472.266 995.795 469 987.574 469H612.426C604.205 469 596.32 472.266 590.506 478.08L558.08 510.506C552.641 515.945 545.265 519 537.574 519H30C13.9837 519 1 506.016 1 490V30C1 13.9837 13.9837 1 30 1H400H537.574C545.265 1 552.641 4.05535 558.08 9.4939L590.506 41.9203C596.32 47.7339 604.205 51 612.426 51H987.574C995.795 51 1003.68 47.7339 1009.49 41.9203L1041.92 9.4939C1047.36 4.05535 1054.74 1 1062.43 1H1200H1570C1586.02 1 1599 13.9837 1599 30Z"
                        fill="black"
                        stroke="url(#paint0_linear3_47_22)"
                        stroke-width="2"
                      />
                      <mask
                          id="mask0_47_22"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                         >
                        <path
                          d="M1600 490V30C1600 13.4315 1586.57 0 1570 0H1200H1062.43C1054.47 0 1046.84 3.1607 1041.21 8.7868L1008.79 41.2132C1003.16 46.8393 995.53 50 987.574 50H612.426C604.47 50 596.839 46.8393 591.213 41.2132L558.787 8.7868C553.161 3.16071 545.53 0 537.574 0H400H30C13.4315 0 0 13.4314 0 30V490C0 506.569 13.4315 520 30 520H537.574C545.53 520 553.161 516.839 558.787 511.213L591.213 478.787C596.839 473.161 604.47 470 612.426 470H987.574C995.53 470 1003.16 473.161 1008.79 478.787L1041.21 511.213C1046.84 516.839 1054.47 520 1062.43 520H1570C1586.57 520 1600 506.569 1600 490Z"
                          fill="black"
                        />
                      </mask>
                      <g mask="url(#mask2_47_22)">
                        <g filter="url(#filter3_f_47_22)">
                          <circle
                            cx="1413"
                            cy="314"
                            r="287"
                            fill="var(--theme-color2)"
                            fill-opacity="0.2"
                          />
                        </g>
                        <g filter="url(#filter03_f_47_22)">
                          <circle
                            cx="231"
                            cy="172"
                            r="229"
                            fill="var(--theme-color)"
                            fill-opacity="0.5"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter3_f_47_22"
                          x="566"
                          y="-533"
                          width="1694"
                          height="1694"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="280"
                            result="effect1_foregroundBlur_47_22"
                          />
                        </filter>
                        <filter
                          id="filter03_f_47_22"
                          x="-558"
                          y="-617"
                          width="1578"
                          height="1578"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="280"
                            result="effect1_foregroundBlur_47_22"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear3_47_22"
                          x1="0"
                          y1="0"
                          x2="1600"
                          y2="520"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="var(--theme-color)" />
                          <stop offset="1" stop-color="var(--theme-color2)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="verses-thumb d-xl-none d-block">
                      <img
                        src="/game-vs1.svg"
                        alt="tournament image"
                      />
                    </div>
                    <div
                      className="hero-img1 z-index-common"
                      data-ani="slideinleft"
                      data-ani-delay="0.4s"
                    >
                      <img src="/hero-1-5.png" alt="Image" />
                    </div>
                    <div
                      className="hero-img2 z-index-common"
                      data-ani="slideinright"
                      data-ani-delay="0.4s"
                    >
                      <img src="/hero-1-6.png" alt="Image" />
                    </div>
                  </div>
                  <div className="title-area mb-0">
                    <h2
                      className="sec-title text-white custom-anim-top wow animated"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.1s"
                    >
                      Join The Big Tournaments
                    </h2>
                    <p
                      className="mt-30 mb-30 custom-anim-top wow animated"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.2s"
                    >
                      Beyond esports tournaments, include a broader calendar of
                      gaming events, conferences, and conventions. and connect
                      with each other.
                    </p>
                    <div
                      className="btn-group custom-anim-top wow animated"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.2s"
                    >
                      <a href="about.html" className="th-btn style-border">
                        <span className="btn-border">
                          JOIN NOW
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-pagination"></div>
      </div>




      <div className="marquee-area-1 bg-repeat overflow-hidden" 
        style={{ backgroundImage: `url('/jiji-bg.png')` }}
        // data-bg-src="assets/img/bg/jiji-bg.png"
      >
        <div className="container-fluid">
            <div className="swiper th-slider" id="marqueeSlider1"
                data-slider-options='{"breakpoints":{"0":{"slidesPerView":"auto"}},"autoplay":{"delay":1500,"disableOnInteraction":false},"spaceBetween":50}'>
                <div className="swiper-wrapper">
                    <div className="marquee-item swiper-slide">
                        <div className="marquee_icon"><img src="/star.png" alt="Icon"/></div>
                        <h3 className="marquee-title"><a href="service-details.html">GAMING SPANING</a></h3>
                    </div>
                    <div className="marquee-item swiper-slide">
                        <div className="marquee_icon"><img src="/star.png" alt="Icon"/></div>
                        <h3 className="marquee-title"><a href="service-details.html">ACTION - PACKED</a></h3>
                    </div>
                    <div className="marquee-item swiper-slide">
                        <div className="marquee_icon"><img src="/star.png" alt="Icon"/></div>
                        <h3 className="marquee-title"><a href="service-details.html">MIND - BENDING</a></h3>
                    </div>
                    <div className="marquee-item swiper-slide">
                        <div className="marquee_icon"><img src="/star.png" alt="Icon"/></div>
                        <h3 className="marquee-title"><a href="service-details.html">COLLECTION OG GAMES</a></h3>
                    </div>
                    <div className="marquee-item swiper-slide">
                        <div className="marquee_icon"><img src="/star.png" alt="Icon"/></div>
                        <h3 className="marquee-title"><a href="service-details.html">GAMING SPANING</a></h3>
                    </div>
                    <div className="marquee-item swiper-slide">
                        <div className="marquee_icon"><img src="/star.png" alt="Icon"/></div>
                        <h3 className="marquee-title"><a href="service-details.html">ACTION - PACKED</a></h3>
                    </div>
                    <div className="marquee-item swiper-slide">
                        <div className="marquee_icon"><img src="/star.png" alt="Icon"/></div>
                        <h3 className="marquee-title"><a href="service-details.html">MIND - BENDING</a></h3>
                    </div>
                    <div className="marquee-item swiper-slide">
                        <div className="marquee_icon"><img src="/star.png" alt="Icon"/></div>
                        <h3 className="marquee-title"><a href="service-details.html">COLLECTION OG GAMES</a></h3>
                    </div>
                </div>
            </div>
        </div>
    </div>




    {/* ============================================about ower game============================================== */}
    <div className="overflow-hidden space" id="about-sec">
        <div className="about-bg-img shape-mockup" data-top="0" data-left="0"><img src="about-bg1.png"
               style={{ width: '100vw', height: '700px'}}  alt="img"/></div>
        <div className="container mt-6 " >
            <div className="row align-items-center">
                <div className="col-xl-6 mb-50 mb-xl-0">
                    <div className="img-box1">
                        <div className="img1 custom-anim-left wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                            <img src="/about1-1.png" alt="About"/></div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="about-wrap1">
                        <div className="about-title-wrap mb-n1">
                            <div className="about-title-thumb custom-anim-top wow animated" data-wow-duration="1.5s"
                                data-wow-delay="0.1s"><img src="/about1-2.png" alt="img"/></div>
                            <div className="title-area custom-anim-left wow animated" data-wow-duration="1.5s"
                                data-wow-delay="0.1s"><span className="sub-title"># About Our Gaming Site</span>
                                <h2 className="sec-title mb-0">Forging Legends in the Gaming Universe</h2>
                            </div>
                        </div>
                        <div className="about-grid">
                            <div className="icon custom-anim-top wow animated" data-wow-duration="1.5s"
                                data-wow-delay="0.2s"><img src="/about_feature_1.svg" alt="img"/></div>
                            <div className="about-grid-details custom-anim-left wow animated" data-wow-duration="1.5s"
                                data-wow-delay="0.2s">
                                <h3 className="about-grid_title h5">Over <span className="text-theme">1k+</span> Affiliate Game
                                    Programs</h3>
                                <p className="about-grid_text">Keep users informed about the gaming industry with news
                                    articles on releases, updates, and events.</p>
                            </div>
                        </div>
                        <div className="about-grid">
                            <div className="icon custom-anim-top wow animated" data-wow-duration="1.5s"
                                data-wow-delay="0.2s"><img src="/about_feature_2.svg" alt="img"/></div>
                            <div className="about-grid-details custom-anim-left wow animated" data-wow-duration="1.5s"
                                data-wow-delay="0.2s">
                                <h3 className="about-grid_title h5">Great Tournaments</h3>
                                <p className="about-grid_text">Display a calendar of upcoming tournaments with dates, times,
                                    and game titles and provide live updates.</p>
                            </div>
                        </div>
                        <div className="about-grid">
                            <div className="icon custom-anim-top wow animated" data-wow-duration="1.5s"
                                data-wow-delay="0.2s"><img src="/about_feature_3.svg" alt="img"/></div>
                            <div className="about-grid-details custom-anim-left wow animated" data-wow-duration="1.5s"
                                data-wow-delay="0.2s">
                                <h3 className="about-grid_title h5">Get Online Supports</h3>
                                <p className="about-grid_text">Create profiles for professional esports players, including
                                    their bios, achievements, and current teams.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
       {/* ----------------------------------sliding bar ---------------------------------------------------- */}
       
       <section className="overflow-hidden slide">
        <div className="container th-container2  bg-black"  >
            <div className="game-sec-wrap1 space" 
             style={{ backgroundImage: `url('/game-sec1-bg.png')` }}
      
            >
                <div className="title-area text-center custom-anim-top wow animated" data-wow-duration="1.5s"
                    data-wow-delay="0.1s"><span className="sub-title"># Releases The Latest Game</span>
                    <h2 className="sec-title">Game On, Power Up, Win Big <span className="text-theme">!</span></h2>
                </div>
                <div className="slider-area">
                    <div className="swiper th-slider game-slider-1" id="gameSlider1"
                        data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide"  style={{width: '300px'}}>
                                <div className="game-card gradient-border">
                                    <div className="game-card-img"><a href="tournament-details.html"><img
                                                src="/1-1.png" alt="game image"/></a>
                                        <div className="game-logo"><img src="/logo1-1.png" alt="game logo"/>
                                        </div>
                                    </div>
                                    <div className="game-card-details">
                                        <h3 className="box-title"><a href="tournament-details.html">The Hunter Killer</a>
                                        </h3>
                                        <p className="game-content">Entry Fee:<span className="text-theme">$10.00</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide"  style={{width: '300px'}}>
                                <div className="game-card gradient-border">
                                    <div className="game-card-img"><a href="tournament-details.html"><img
                                                src="/1-2.png" alt="game image"/></a>
                                        <div className="game-logo"><img src="/logo1-2.png" alt="game logo"/>
                                        </div>
                                    </div>
                                    <div className="game-card-details">
                                        <h3 className="box-title"><a href="tournament-details.html">Net Remaining Monies</a>
                                        </h3>
                                        <p className="game-content">Entry Fee:<span className="text-theme">Free</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide"  style={{width: '300px'}}>
                                <div className="game-card gradient-border">
                                    <div className="game-card-img"><a href="tournament-details.html"><img
                                                src="/1-3.png" alt="game image"/></a>
                                        <div className="game-logo"><img src="/logo1-3.png" alt="game logo"/>
                                        </div>
                                    </div>
                                    <div className="game-card-details">
                                        <h3 className="box-title"><a href="tournament-details.html">Duty Balck Ops</a></h3>
                                        <p className="game-content">Entry Fee:<span className="text-theme">$10.00</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide"  style={{width: '300px'}}>
                                <div className="game-card gradient-border">
                                    <div className="game-card-img"><a href="tournament-details.html"><img
                                                src="/1-4.png" alt="game image"/></a>
                                        <div className="game-logo"><img src="/logo1-4.png" alt="game logo"/>
                                        </div>
                                    </div>
                                    <div className="game-card-details">
                                        <h3 className="box-title"><a href="tournament-details.html">League of Legends</a>
                                        </h3>
                                        <p className="game-content">Entry Fee:<span className="text-theme">$10.00</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide"  style={{width: '300px'}}>
                                <div className="game-card gradient-border">
                                    <div className="game-card-img"><a href="tournament-details.html"><img
                                                src="/1-1.png" alt="game image"/></a>
                                        <div className="game-logo"><img src="/logo1-1.png" alt="game logo"/>
                                        </div>
                                    </div>
                                    <div className="game-card-details">
                                        <h3 className="box-title"><a href="tournament-details.html">The Hunter Killer</a>
                                        </h3>
                                        <p className="game-content">Entry Fee:<span className="text-theme">$10.00</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide"  style={{width: '300px'}}>
                                <div className="game-card gradient-border">
                                    <div className="game-card-img"><a href="tournament-details.html"><img
                                                src="/1-2.png" alt="game image"/></a>
                                        <div className="game-logo"><img src="/logo1-2.png" alt="game logo"/>
                                        </div>
                                    </div>
                                    <div className="game-card-details">
                                        <h3 className="box-title"><a href="tournament-details.html">Net Remaining Monies</a>
                                        </h3>
                                        <p className="game-content">Entry Fee:<span className="text-theme">Free</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide"  style={{width: '300px'}}>
                                <div className="game-card gradient-border">
                                    <div className="game-card-img"><a href="tournament-details.html"><img
                                                src="/1-3.png" alt="game image"/></a>
                                        <div className="game-logo"><img src="/logo1-3.png" alt="game logo"/>
                                        </div>
                                    </div>
                                    <div className="game-card-details">
                                        <h3 className="box-title"><a href="tournament-details.html">Duty Balck Ops</a></h3>
                                        <p className="game-content">Entry Fee:<span className="text-theme">$10.00</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide"  style={{width: '300px'}}>
                                <div className="game-card gradient-border">
                                    <div className="game-card-img"><a href="tournament-details.html"><img
                                                src="/1-4.png" alt="game image"/></a>
                                        <div className="game-logo"><img src="/logo1-4.png" alt="game logo"/>
                                        </div>
                                    </div>
                                    <div className="game-card-details">
                                        <h3 className="box-title"><a href="tournament-details.html">League of Legends</a>
                                        </h3>
                                        <p className="game-content">Entry Fee:<span className="text-theme">$10.00</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     {/* -------------------------------------#world------------------------------------------------------------------- */}



     <section className="space">
      <div className="container" style={{background: '#07090d'}}>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center custom-anim-top wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <span className="sub-title"># World Best Facilities Game</span>
              <h2 className="sec-title">Bame Comes With Many Facilities Included In Planet <span className="text-theme">!</span></h2>
            </div>
          </div>
        </div>
        <div className="feature-sec-wrap1" style={{ backgroundImage: `url('/feature-sec1-bg.png')`, backgroundRepeat: 'no-repeat' , backgroundSize: 'cover'}}>
          <div className="feature-card-wrap">
            <div className="feature-card-border">
              <div className="feature-card">
                <div className="feature-card-icon custom-anim-top wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                  <span className="feature-card-icon-mask" style={{ backgroundImage: `url('/feature_1.svg')` }}></span>
                  <img src="/feature_1.svg" alt="img" />
                </div>
                <div className="feature-card-details custom-anim-top wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                  <h3 className="feature-card-title">Esports Lounge</h3>
                  <p className="feature-card-text">Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-card-wrap">
            <div className="feature-card-border">
              <div className="feature-card">
                <div className="feature-card-icon custom-anim-top wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                  <span className="feature-card-icon-mask" style={{ backgroundImage: `url('/feature_2.svg')` }}></span>
                  <img src="/feature_2.svg" alt="img" />
                </div>
                <div className="feature-card-details custom-anim-top wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                  <h3 className="feature-card-title">Training Facilities</h3>
                  <p className="feature-card-text">Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-card-wrap">
            <div className="feature-card-border">
              <div className="feature-card">
                <div className="feature-card-icon custom-anim-top wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                  <span className="feature-card-icon-mask" style={{ backgroundImage: `url('/feature_3.svg')` }}></span>
                  <img src="/feature_3.svg" alt="img" />
                </div>
                <div className="feature-card-details custom-anim-top wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                  <h3 className="feature-card-title">Broadcasting Studio</h3>
                  <p className="feature-card-text">Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    {/* =====================================================#stream=================================================== */}
    <section className="space bg-top-center" 
      style={{ backgroundImage: `url('/tournament-sec1-bg.png')`}}
    // data-bg-src="assets/img/bg/tournament-sec1-bg.png"
    >
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-auto">
                    <div className="title-area text-lg-start text-center custom-anim-left wow animated"
                        data-wow-duration="1.5s" data-wow-delay="0.2s"><span className="sub-title"># Game Streaming
                            Battle</span>
                        <h2 className="sec-title">Our Gaming Tournaments <span className="text-theme">!</span></h2>
                    </div>
                </div>
                <div className="col-lg-auto">
                    <div className="sec-btn custom-anim-right wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                        <div className="tournament-filter-btn filter-menu filter-menu-active"><button data-filter="*"
                                className="tab-btn active" type="button">ALL MATCH</button> <button data-filter=".cat1"
                                className="tab-btn" type="button">UPCOMING MATCH</button> <button data-filter=".cat2"
                                className="tab-btn" type="button">FINISHED MATCH</button></div>
                    </div>
                </div>
            </div>
            <div className="row gy-4 filter-active">
                <div className="col-12 filter-item cat1">
                    <div className="tournament-card gradient-border">
                        <div className="tournament-card-img"><img src="/img/tournament/1-1.png"
                                alt="tournament image"/> <img src="/img/tournament/game-vs1.svg"
                                alt="tournament image"/> <img src="/img/tournament/1-2.png" alt="tournament image"/>
                        </div>
                        <div className="tournament-card-content">
                            <div className="tournament-card-details">
                                <div className="tournament-card-meta"><span className="tournament-card-tag">Upcoming</span>
                                    <span className="tournament-card-score gradient-border">0 / 0</span></div>
                                <h3 className="tournament-card-title"><a href="tournament-details.html">Pro Player VS Lion
                                        King</a></h3>
                                <p className="tournament-card-date">23 December, 2024 <span className="text-theme">6:00
                                        PM</span></p>
                                <div className="th-social"><a href="https://www.youtube.com/"><i
                                            className="fab fa-youtube"></i>Youtube</a> <a href="tournament-details.html"><i
                                            className="fa-brands fa-twitch"></i>Twitch</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 filter-item cat2">
                    <div className="tournament-card gradient-border">
                        <div className="tournament-card-img"><img src="/img/tournament/1-3.png"
                                alt="tournament image"/> <img src="/img/tournament/game-vs1.svg"
                                alt="tournament image"/> <img src="/img/tournament/1-4.png" alt="tournament image"/>
                        </div>
                        <div className="tournament-card-content">
                            <div className="tournament-card-details">
                                <div className="tournament-card-meta"><span className="tournament-card-tag">Finished</span>
                                    <span className="tournament-card-score gradient-border">20 / 22</span></div>
                                <h3 className="tournament-card-title"><a href="tournament-details.html">Assassin King VS
                                        Cyberpunk</a></h3>
                                <p className="tournament-card-date">20 December, 2024 <span className="text-theme">6:00
                                        PM</span></p>
                                <div className="th-social"><a href="https://www.youtube.com/"><i
                                            className="fab fa-youtube"></i>Youtube</a> <a href="tournament-details.html"><i
                                            className="fa-brands fa-twitch"></i>Twitch</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 filter-item cat1">
                    <div className="tournament-card gradient-border">
                        <div className="tournament-card-img"><img src="/img/tournament/1-5.png"
                                alt="tournament image"/> <img src="/img/tournament/game-vs1.svg"
                                alt="tournament image"/> <img src="/img/tournament/1-6.png" alt="tournament image"/>
                        </div>
                        <div className="tournament-card-content">
                            <div className="tournament-card-details">
                                <div className="tournament-card-meta"><span className="tournament-card-tag">Upcoming</span>
                                    <span className="tournament-card-score gradient-border">0 / 0</span></div>
                                <h3 className="tournament-card-title"><a href="tournament-details.html">Team Gorilla VS
                                        Badgamer</a></h3>
                                <p className="tournament-card-date">23 December, 2024 <span className="text-theme">6:10
                                        PM</span></p>
                                <div className="th-social"><a href="https://www.youtube.com/"><i
                                            className="fab fa-youtube"></i>Youtube</a> <a href="tournament-details.html"><i
                                            className="fa-brands fa-twitch"></i>Twitch</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* ===================================================sliding  image================================================ */}
     <div className="container-fluid p-0">
        <div className="gallery-area-1 overflow-hidden text-center">
            <div className="slider-area gallery-slider1">
                <div className="swiper th-slider" id="gallerySlider1"
                    data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}},"effect":"coverflow","coverflowEffect":{"rotate":"0","stretch":"0","depth":"150","modifier":"1"},"centeredSlides":"true"}'>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide gallery-wrap1">
                            <div className="th-video"><img src="/img/video/1-1.png" alt="img"/> <a
                                    href="/img/video/1-1.png" className="play-btn popup-image style3"><i
                                        className="fa-solid fa-arrow-up-right"></i></a></div>
                        </div>
                        <div className="swiper-slide gallery-wrap1">
                            <div className="th-video"><img src="/img/video/1-2.png" alt="img"/> <a
                                    href="/img/video/1-2.png" className="play-btn popup-image style3"><i
                                        className="fa-solid fa-arrow-up-right"></i></a></div>
                        </div>
                        <div className="swiper-slide gallery-wrap1">
                            <div className="th-video"><img src="/img/video/1-3.png" alt="img"/> <a
                                    href="/img/video/1-3.png" className="play-btn popup-image style3"><i
                                        className="fa-solid fa-arrow-up-right"></i></a></div>
                        </div>
                        <div className="swiper-slide gallery-wrap1">
                            <div className="th-video"><img src="/img/video/1-1.png" alt="img"/> <a
                                    href="/img/video/1-1.png" className="play-btn popup-image style3"><i
                                        className="fa-solid fa-arrow-up-right"></i></a></div>
                        </div>
                        <div className="swiper-slide gallery-wrap1">
                            <div className="th-video"><img src="/img/video/1-2.png" alt="img"/> <a
                                    href="/img/video/1-2.png" className="play-btn popup-image style3"><i
                                        className="fa-solid fa-arrow-up-right"></i></a></div>
                        </div>
                        <div className="swiper-slide gallery-wrap1">
                            <div className="th-video"><img src="/img/video/1-3.png" alt="img"/> <a
                                    href="/img/video/1-3.png" className="play-btn popup-image style3"><i
                                        className="fa-solid fa-arrow-up-right"></i></a></div>
                        </div>
                    </div>
                </div><button data-slider-prev="#gallerySlider1" className="slider-arrow slider-prev"><i
                        className="fas fa-angle-left"></i></button> <button data-slider-next="#gallerySlider1"
                    className="slider-arrow slider-next"><i className="fas fa-angle-right"></i></button>
            </div>
        </div>
    </div>


    {/* ----------------------------------------------------------------------------------------------------------------------------- */}
    <section className="team-sec-1 space">
        <div className="team-shape1-1 shape-mockup" data-top="0" data-right="0"><img src="/img/bg/team-sec1-bg.png"
                alt="img"/></div>
        <div className="container th-container3" style={{background: 'black'}}>
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-8">
                    <div className="title-area text-center custom-anim-top wow animated" data-wow-duration="1.5s"
                        data-wow-delay="0.2s"><span className="sub-title"># Top World Class Gamer</span>
                        <h2 className="sec-title">Let’s See Our Pro Players</h2>
                    </div>
                </div>
            </div>
            <div className="slider-area team-slider1">
                <div className="swiper th-slider has-shadow" id="teamSlider1"
                    data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"4"},"1200":{"slidesPerView":"5"}}}'>
                    <div className="swiper-wrapper" style={{ width: '300px'}}>
                        <div className="swiper-slide">
                            <div className="th-team team-card">
                                <div className="team-card-corner team-card-corner1"></div>
                                <div className="team-card-corner team-card-corner2"></div>
                                <div className="team-card-corner team-card-corner3"></div>
                                <div className="team-card-corner team-card-corner4"></div>
                                <div className="img-wrap">
                                    <div className="team-img"><img src="/img/team/1-1.png" alt="Team"/></div><img
                                        className="game-logo" src="/img/team/game-logo1-1.png" alt="Team"/>
                                </div>
                                <div className="team-card-content">
                                    <h3 className="box-title"><a href="team-details.html">Max Alexis</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="th-team team-card">
                                <div className="team-card-corner team-card-corner1"></div>
                                <div className="team-card-corner team-card-corner2"></div>
                                <div className="team-card-corner team-card-corner3"></div>
                                <div className="team-card-corner team-card-corner4"></div>
                                <div className="img-wrap">
                                    <div className="team-img"><img src="/img/team/1-2.png" alt="Team"/></div><img
                                        className="game-logo" src="/img/team/game-logo1-2.png" alt="Team"/>
                                </div>
                                <div className="team-card-content">
                                    <h3 className="box-title"><a href="team-details.html">Wilium Lili</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="th-team team-card">
                                <div className="team-card-corner team-card-corner1"></div>
                                <div className="team-card-corner team-card-corner2"></div>
                                <div className="team-card-corner team-card-corner3"></div>
                                <div className="team-card-corner team-card-corner4"></div>
                                <div className="img-wrap">
                                    <div className="team-img"><img src="/img/team/1-3.png" alt="Team"/></div><img
                                        className="game-logo" src="/img/team/game-logo1-3.png" alt="Team"/>
                                </div>
                                <div className="team-card-content">
                                    <h3 className="box-title"><a href="team-details.html">Mac Marsh</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="th-team team-card">
                                <div className="team-card-corner team-card-corner1"></div>
                                <div className="team-card-corner team-card-corner2"></div>
                                <div className="team-card-corner team-card-corner3"></div>
                                <div className="team-card-corner team-card-corner4"></div>
                                <div className="img-wrap">
                                    <div className="team-img"><img src="/img/team/1-4.png" alt="Team"/></div><img
                                        className="game-logo" src="/img/team/game-logo1-4.png" alt="Team"/>
                                </div>
                                <div className="team-card-content">
                                    <h3 className="box-title"><a href="team-details.html">Eva Raina</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="th-team team-card">
                                <div className="team-card-corner team-card-corner1"></div>
                                <div className="team-card-corner team-card-corner2"></div>
                                <div className="team-card-corner team-card-corner3"></div>
                                <div className="team-card-corner team-card-corner4"></div>
                                <div className="img-wrap">
                                    <div className="team-img"><img src="/img/team/1-5.png" alt="Team"/></div><img
                                        className="game-logo" src="/img/team/game-logo1-5.png" alt="Team"/>
                                </div>
                                <div className="team-card-content">
                                    <h3 className="box-title"><a href="team-details.html">Robin Cloth</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="th-team team-card">
                                <div className="team-card-corner team-card-corner1"></div>
                                <div className="team-card-corner team-card-corner2"></div>
                                <div className="team-card-corner team-card-corner3"></div>
                                <div className="team-card-corner team-card-corner4"></div>
                                <div className="img-wrap">
                                    <div className="team-img"><img src="/img/team/1-1.png" alt="Team"/></div><img
                                        className="game-logo" src="/img/team/game-logo1-1.png" alt="Team"/>
                                </div>
                                <div className="team-card-content">
                                    <h3 className="box-title"><a href="team-details.html">Max Alexis</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="th-team team-card">
                                <div className="team-card-corner team-card-corner1"></div>
                                <div className="team-card-corner team-card-corner2"></div>
                                <div className="team-card-corner team-card-corner3"></div>
                                <div className="team-card-corner team-card-corner4"></div>
                                <div className="img-wrap">
                                    <div className="team-img"><img src="/img/team/1-2.png" alt="Team"/></div><img
                                        className="game-logo" src="/img/team/game-logo1-2.png" alt="Team"/>
                                </div>
                                <div className="team-card-content">
                                    <h3 className="box-title"><a href="team-details.html">Wilium Lili</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="th-team team-card">
                                <div className="team-card-corner team-card-corner1"></div>
                                <div className="team-card-corner team-card-corner2"></div>
                                <div className="team-card-corner team-card-corner3"></div>
                                <div className="team-card-corner team-card-corner4"></div>
                                <div className="img-wrap">
                                    <div className="team-img"><img src="/img/team/1-3.png" alt="Team"/></div><img
                                        className="game-logo" src="/img/team/game-logo1-3.png" alt="Team"/>
                                </div>
                                <div className="team-card-content">
                                    <h3 className="box-title"><a href="team-details.html">Mac Marsh</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="th-team team-card">
                                <div className="team-card-corner team-card-corner1"></div>
                                <div className="team-card-corner team-card-corner2"></div>
                                <div className="team-card-corner team-card-corner3"></div>
                                <div className="team-card-corner team-card-corner4"></div>
                                <div className="img-wrap">
                                    <div className="team-img"><img src="/img/team/1-4.png" alt="Team"/></div><img
                                        className="game-logo" src="/img/team/game-logo1-4.png" alt="Team"/>
                                </div>
                                <div className="team-card-content">
                                    <h3 className="box-title"><a href="team-details.html">Eva Raina</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="th-team team-card">
                                <div className="team-card-corner team-card-corner1"></div>
                                <div className="team-card-corner team-card-corner2"></div>
                                <div className="team-card-corner team-card-corner3"></div>
                                <div className="team-card-corner team-card-corner4"></div>
                                <div className="img-wrap">
                                    <div className="team-img"><img src="/img/team/1-5.png" alt="Team"/></div><img
                                        className="game-logo" src="/img/team/game-logo1-5.png" alt="Team"/>
                                </div>
                                <div className="team-card-content">
                                    <h3 className="box-title"><a href="team-details.html">Robin Cloth</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><button data-slider-prev="#teamSlider1" className="slider-arrow slider-prev"><i
                        className="far fa-arrow-left"></i></button> <button data-slider-next="#teamSlider1"
                    className="slider-arrow slider-next"><i className="far fa-arrow-right"></i></button>
            </div>
        </div>
    </section>
    
    {/* ====================================================game shop=============================================== */}
    <section className="space">
        <div className="container" style={{ background: '#202225'}}>
            <div className="row justify-content-between align-items-center">
                <div className="col-md-auto">
                    <div className="title-area custom-anim-left wow animated text-md-start text-center"
                        data-wow-duration="1.5s" data-wow-delay="0.2s"><span className="sub-title"># Gamer Shop</span>
                        <h2 className="sec-title">Our Latest Gaming Products <span className="text-theme">!</span></h2>
                    </div>
                </div>
                <div className="col-md-auto d-none d-md-block">
                    <div className="sec-btn">
                        <div className="icon-box"><button data-slider-prev="#productSlider1"
                                className="slider-arrow style2 default"><i className="far fa-arrow-left"></i></button> <button
                                data-slider-next="#productSlider1" className="slider-arrow style2 default"><i
                                    className="far fa-arrow-right"></i></button></div>
                    </div>
                </div>
            </div>
            <div className="swiper th-slider has-shadow" id="productSlider1"
                data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'>
                <div className="swiper-wrapper" style={{ width: '300px'}}>
                    <div className="swiper-slide"  style={{margin: "0 5px"}}>
                        <div className="th-product product-grid">
                            <div className="product-img"><img src="/img/product/product_1_1.png" alt="Product Image"/>
                                <div className="overlay gradient-border"></div>
                                <div className="actions"><a href="cart.html" className="icon-btn"><i
                                            className="far fa-cart-plus"></i></a> <a href="wishlist.html"
                                        className="icon-btn"><i className="fas fa-heart"></i></a> <a href="#QuickView"
                                        className="icon-btn popup-content"><i className="fas fa-eye"></i></a></div>
                            </div>
                            <div className="product-content">
                                <h3 className="product-title"><a href="shop-details.html">Gaming Headphone</a></h3><span
                                    className="price">$177.85</span>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide" style={{margin: "0 5px"}}>
                        <div className="th-product product-grid">
                            <div className="product-img"><img src="/img/product/product_1_2.png" alt="Product Image"/>
                                <div className="overlay gradient-border"></div>
                                <div className="actions"><a href="cart.html" className="icon-btn"><i
                                            className="far fa-cart-plus"></i></a> <a href="wishlist.html"
                                        className="icon-btn"><i className="fas fa-heart"></i></a> <a href="#QuickView"
                                        className="icon-btn popup-content"><i className="fas fa-eye"></i></a></div>
                            </div>
                            <div className="product-content">
                                <h3 className="product-title"><a href="shop-details.html">Gaming Mouse</a></h3><span
                                    className="price">$120.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide" style={{margin: "0 5px"}}>
                        <div className="th-product product-grid">
                            <div className="product-img"><img src="/img/product/product_1_3.png" alt="Product Image"/>
                                <div className="overlay gradient-border"></div>
                                <div className="actions"><a href="cart.html" className="icon-btn"><i
                                            className="far fa-cart-plus"></i></a> <a href="wishlist.html"
                                        className="icon-btn"><i className="fas fa-heart"></i></a> <a href="#QuickView"
                                        className="icon-btn popup-content"><i className="fas fa-eye"></i></a></div>
                            </div>
                            <div className="product-content">
                                <h3 className="product-title"><a href="shop-details.html">Gaming Keyboard</a></h3><span
                                    className="price">$96.85</span>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide" style={{margin: "0 5px"}}>
                        <div className="th-product product-grid">
                            <div className="product-img"><img src="/img/product/product_1_4.png" alt="Product Image"/>
                                <div className="overlay gradient-border"></div>
                                <div className="actions"><a href="cart.html" className="icon-btn"><i
                                            className="far fa-cart-plus"></i></a> <a href="wishlist.html"
                                        className="icon-btn"><i className="fas fa-heart"></i></a> <a href="#QuickView"
                                        className="icon-btn popup-content"><i className="fas fa-eye"></i></a></div>
                            </div>
                            <div className="product-content">
                                <h3 className="product-title"><a href="shop-details.html">Gaming Chair</a></h3><span
                                    className="price">$08.85<del>$06.99</del></span>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide" style={{margin: "0 5px"}}>
                        <div className="th-product product-grid">
                            <div className="product-img"><img src="/img/product/product_1_5.png" alt="Product Image"/>
                                <div className="overlay gradient-border"></div>
                                <div className="actions"><a href="cart.html" className="icon-btn"><i
                                            className="far fa-cart-plus"></i></a> <a href="wishlist.html"
                                        className="icon-btn"><i className="fas fa-heart"></i></a> <a href="#QuickView"
                                        className="icon-btn popup-content"><i className="fas fa-eye"></i></a></div>
                            </div>
                            <div className="product-content">
                                <h3 className="product-title"><a href="shop-details.html">Microphone G9000</a></h3><span
                                    className="price">$32.85</span>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide" style={{margin: "0 5px"}}>
                        <div className="th-product product-grid">
                            <div className="product-img"><img src="/img/product/product_1_6.png" alt="Product Image"/>
                                <div className="overlay gradient-border"></div>
                                <div className="actions"><a href="cart.html" className="icon-btn"><i
                                            className="far fa-cart-plus"></i></a> <a href="wishlist.html"
                                        className="icon-btn"><i className="fas fa-heart"></i></a> <a href="#QuickView"
                                        className="icon-btn popup-content"><i className="fas fa-eye"></i></a></div>
                            </div>
                            <div className="product-content">
                                <h3 className="product-title"><a href="shop-details.html">Play Station Controller</a></h3>
                                <span className="price">$30.85</span>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide" style={{margin: "0 5px"}}>
                        <div className="th-product product-grid">
                            <div className="product-img"><img src="/img/product/product_1_7.png" alt="Product Image"/>
                                <div className="overlay gradient-border"></div>
                                <div className="actions"><a href="cart.html" className="icon-btn"><i
                                            className="far fa-cart-plus"></i></a> <a href="wishlist.html"
                                        className="icon-btn"><i className="fas fa-heart"></i></a> <a href="#QuickView"
                                        className="icon-btn popup-content"><i className="fas fa-eye"></i></a></div>
                            </div>
                            <div className="product-content">
                                <h3 className="product-title"><a href="shop-details.html">PlayStation VR</a></h3><span
                                    className="price">$232.85</span>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide" style={{margin: "0 5px"}}>
                        <div className="th-product product-grid">
                            <div className="product-img"><img src="/img/product/product_1_8.png" alt="Product Image"/>
                                <div className="overlay gradient-border"></div>
                                <div className="actions"><a href="cart.html" className="icon-btn"><i
                                            className="far fa-cart-plus"></i></a> <a href="wishlist.html"
                                        className="icon-btn"><i className="fas fa-heart"></i></a> <a href="#QuickView"
                                        className="icon-btn popup-content"><i className="fas fa-eye"></i></a></div>
                            </div>
                            <div className="product-content">
                                <h3 className="product-title"><a href="shop-details.html">Wireless speaker</a></h3><span
                                    className="price">$30.85</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-block d-md-none mt-40 text-center">
                <div className="icon-box"><button data-slider-prev="#productSlider1" className="slider-arrow style2 default"><i
                            className="far fa-arrow-left"></i></button> <button data-slider-next="#productSlider1"
                        className="slider-arrow style2 default"><i className="far fa-arrow-right"></i></button></div>
            </div>
        </div>
    </section>



     {/* ==================================================news------------------------------------------------- */}
     <section className="" id="blog-sec">
        <div className="container" style={{ background: 'black'}}>
            <div className="title-area text-center custom-anim-top wow animated" data-wow-duration="1.5s"
                data-wow-delay="0.2s"><span className="sub-title"># Latest News</span>
                <h2 className="sec-title">Stay Updated With Our Blog <span className="text-theme">!</span></h2>
            </div>
            <div className="slider-area">
                <div className="swiper th-slider has-shadow" id="blogSlider1"
                    data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" style={{ width: '300px' , margin: '0 5px'}}>
                            <div className="blog-card">
                                <div className="blog-img"><a href="blog-details.html"><img
                                            src="/img/blog/blog_1_1.jpg" alt="blog image"/></a></div>
                                <div className="blog-content">
                                    <div className="blog-meta"><a href="blog.html"><i className="far fa-user"></i>By Jonson</a>
                                        <a href="blog.html"><i className="far fa-calendar"></i>30 Nov, 2024</a></div>
                                    <h3 className="blog-title"><a href="blog-details.html">Strategies for Dominating Your
                                            Favorite Game</a></h3><a href="blog-details.html"
                                        className="link-btn style2">Read More <i className="fas fa-arrow-right ms-1"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide" style={{ width: '300px', margin: '0 5px'}}>
                            <div className="blog-card">
                                <div className="blog-img"><a href="blog-details.html"><img
                                            src="/img/blog/blog_1_2.jpg" alt="blog image"/></a></div>
                                <div className="blog-content">
                                    <div className="blog-meta"><a href="blog.html"><i className="far fa-user"></i>By Jonson</a>
                                        <a href="blog.html"><i className="far fa-calendar"></i>25 Dec, 2024</a></div>
                                    <h3 className="blog-title"><a href="blog-details.html">Breaking Barriers and Shaping the
                                            Future</a></h3><a href="blog-details.html" className="link-btn style2">Read More
                                        <i className="fas fa-arrow-right ms-1"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide" style={{ width: '300px', margin: '0 5px'}}>
                            <div className="blog-card">
                                <div className="blog-img"><a href="blog-details.html"><img
                                            src="/img/blog/blog_1_3.jpg" alt="blog image"/></a></div>
                                <div className="blog-content">
                                    <div className="blog-meta"><a href="blog.html"><i className="far fa-user"></i>By Jonson</a>
                                        <a href="blog.html"><i className="far fa-calendar"></i>23 Jun, 2024</a></div>
                                    <h3 className="blog-title"><a href="blog-details.html">Taking Customization to the Next
                                            Level</a></h3><a href="blog-details.html" className="link-btn style2">Read More
                                        <i className="fas fa-arrow-right ms-1"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide" style={{ width: '300px', margin: '0 5px'}}>
                            <div className="blog-card">
                                <div className="blog-img"><a href="blog-details.html"><img
                                            src="/img/blog/blog_1_1.jpg" alt="blog image"/></a></div>
                                <div className="blog-content">
                                    <div className="blog-meta"><a href="blog.html"><i className="far fa-user"></i>By Jonson</a>
                                        <a href="blog.html"><i className="far fa-calendar"></i>30 Nov, 2024</a></div>
                                    <h3 className="blog-title"><a href="blog-details.html">Strategies for Dominating Your
                                            Favorite Game</a></h3><a href="blog-details.html"
                                        className="link-btn style2">Read More <i className="fas fa-arrow-right ms-1"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide" style={{ width: '300px', margin: '0 5px'}}>
                            <div className="blog-card">
                                <div className="blog-img"><a href="blog-details.html"><img
                                            src="/img/blog/blog_1_2.jpg" alt="blog image"/></a></div>
                                <div className="blog-content">
                                    <div className="blog-meta"><a href="blog.html"><i className="far fa-user"></i>By Jonson</a>
                                        <a href="blog.html"><i className="far fa-calendar"></i>25 Dec, 2024</a></div>
                                    <h3 className="blog-title"><a href="blog-details.html">Breaking Barriers and Shaping the
                                            Future</a></h3><a href="blog-details.html" className="link-btn style2">Read More
                                        <i className="fas fa-arrow-right ms-1"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide" style={{ width: '300px', margin: '0 5px'}}>
                            <div className="blog-card">
                                <div className="blog-img"><a href="blog-details.html"><img
                                            src="/img/blog/blog_1_3.jpg" alt="blog image"/></a></div>
                                <div className="blog-content">
                                    <div className="blog-meta"><a href="blog.html"><i className="far fa-user"></i>By Jonson</a>
                                        <a href="blog.html"><i className="far fa-calendar"></i>23 Jun, 2024</a></div>
                                    <h3 className="blog-title"><a href="blog-details.html">Taking Customization to the Next
                                            Level</a></h3><a href="blog-details.html" className="link-btn style2">Read More
                                        <i className="fas fa-arrow-right ms-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


  {/* ======================================team======================================================================================== */}
  <div className="client-area-1 overflow-hidden space" style={{ marginTop: '24px'}}>
        <div className="container-fluid p-0">
            <div className="swiper th-slider client-slider1"
                data-slider-options='{"breakpoints":{"0":{"slidesPerView":2},"400":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"4"},"1200":{"slidesPerView":"7"},"1300":{"slidesPerView":"9"}}, "spaceBetween": "0", "loop": "true"}'>
                <div className="swiper-wrapper">
                    <div className="swiper-slide" style={{width: '150px'}}><a href="#" className="client-card"><img src="/img/client/1-1.png"
                                alt="Image"/></a></div>
                    <div className="swiper-slide" style={{width: '150px'}}><a href="#" className="client-card"><img src="/img/client/1-2.png"
                                alt="Image"/></a></div>
                    <div className="swiper-slide" style={{width: '150px'}}><a href="#" className="client-card"><img src="/img/client/1-3.png"
                                alt="Image"/></a></div>
                    <div className="swiper-slide" style={{width: '150px'}}><a href="#" className="client-card"><img src="/img/client/1-4.png"
                                alt="Image"/></a></div>
                    <div className="swiper-slide" style={{width: '150px'}}><a href="#" className="client-card"><img src="/img/client/1-5.png"
                                alt="Image"/></a></div>
                    <div className="swiper-slide" style={{width: '150px'}}><a href="#" className="client-card"><img src="/img/client/1-6.png"
                                alt="Image"/></a></div>
                    <div className="swiper-slide" style={{width: '150px'}}><a href="#" className="client-card"><img src="/img/client/1-7.png"
                                alt="Image"/></a></div>
                    <div className="swiper-slide" style={{width: '150px'}}><a href="#" className="client-card"><img src="/img/client/1-8.png"
                                alt="Image"/></a></div>
                    <div className="swiper-slide" style={{width: '150px'}}><a href="#" className="client-card"><img src="/img/client/1-9.png"
                                alt="Image"/></a></div>
                    <div className="swiper-slide" style={{width: '150px'}}><a href="#" className="client-card"><img src="/img/client/1-1.png"
                                alt="Image"/></a></div>
                    <div className="swiper-slide" style={{width: '150px'}}><a href="#" className="client-card"><img src="/img/client/1-2.png"
                                alt="Image"/></a></div>
                    <div className="swiper-slide" style={{width: '150px'}}><a href="#" className="client-card"><img src="/img/client/1-3.png"
                                alt="Image"/></a></div>
                    <div className="swiper-slide" style={{width: '150px'}}><a href="#" className="client-card"><img src="/img/client/1-4.png"
                                alt="Image"/></a></div>
                    <div className="swiper-slide" style={{width: '150px'}}><a href="#" className="client-card"><img src="/img/client/1-5.png"
                                alt="Image"/></a></div>
                    <div className="swiper-slide" style={{width: '150px'}}><a href="#" className="client-card"><img src="/img/client/1-6.png"
                                alt="Image"/></a></div>
                    <div className="swiper-slide" style={{width: '150px'}}><a href="#" className="client-card"><img src="/img/client/1-7.png"
                                alt="Image"/></a></div>
                    <div className="swiper-slide" style={{width: '150px'}}><a href="#" className="client-card"><img src="/img/client/1-8.png"
                                alt="Image"/></a></div>
                    <div className="swiper-slide" style={{width: '150px'}}><a href="#" className="client-card"><img src="/img/client/1-9.png"
                                alt="Image"/></a></div>
                </div>
            </div>
        </div>
    </div>




    <Footer/>

    
    </>
  );
}
