"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faCaretLeft, faCaretRight, faCartArrowDown, faHeart, faEye} from '@fortawesome/free-solid-svg-icons'
import "./globals.css";
import Navbar from "../component/Navbar";
import Image from "next/image";
import React, { useEffect , useRef} from 'react';
import 'swiper/swiper-bundle.css';
import Footer from '../component/Footer';
import '../../node_modules/swiper/swiper-bundle.min.css'; // Import Swiper CSS
import Swiper from 'swiper';



export default function Home() {

  // =======================================game swipe============================\
  let swiperGame = useRef(null);
  useEffect(() => {
    const swiper = new Swiper(swiperGame.current, {
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: { slidesPerView: 1, spaceBetween: 5 },
        1024: { slidesPerView: 3, spaceBetween: 5 },
        1280: { slidesPerView: 5, spaceBetween: 5 }
      }
    });

    return () => swiper.destroy();
  }, []);

  let handleGamePrev = () => swiperGame.current?.swiper.slidePrev()
   let handleGameNext = () => swiperGame.current?.swiper.slideNext()
  // ===============================swipt news=================================
   let swiperNews = useRef(null)

   useEffect(() => {
    const swiper = new Swiper(swiperNews.current, {
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: { slidesPerView: 1, spaceBetween: 10 },
        1024: { slidesPerView: 3, spaceBetween: 15 },
        1280: { slidesPerView: 5, spaceBetween: 20 }
      }
    });

    return () => swiper.destroy();
  }, []);
  // ===============================shop-------------------------------
  let swiperShop = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperShop.current, {
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: { slidesPerView: 1, spaceBetween: 5 },
        1024: { slidesPerView: 3, spaceBetween: 5 },
        1280: { slidesPerView: 5, spaceBetween: 5 }
      }
    });

    return () => swiper.destroy();
  }, []);

  const handleShopPrev = () => swiperShop.current?.swiper.slidePrev();
  const handleShopNext = () => swiperShop.current?.swiper.slideNext();


  // ======================swiper pro gamer ========================= 
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      loop: true,
      centeredSlides: true,
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      breakpoints: { 768: { slidesPerView: 1, spaceBetween: 15 }, 1024: { slidesPerView: 3, spaceBetween: 10 }, 1280: { slidesPerView: 5, spaceBetween: 15 } }
    });
    return () => swiper.destroy();
  }, []);

  const handlePrev = () => swiperRef.current?.swiper.slidePrev();
  const handleNext = () => swiperRef.current?.swiper.slideNext();

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 3000);
    return () => clearInterval(interval);
  }, []);

  //  ==================================auto slider==========================================
  useEffect(() => {
    const photos = Array.from(document.getElementsByClassName("photo"));
    const photoWrapper = document.getElementById("photoWrapper");

    if (photoWrapper) {
      let count = 0;
      photos.forEach((photo) => {
        count++;
        if (count % 2) {
          photo.classList.add("even");
        }
      });

      photoWrapper.addEventListener("scroll", () => {
        photos.forEach(checkPosition);
      });

      function checkPosition(photo) {
        if (photo.getBoundingClientRect().right - 4 <= 0) {
          photo.remove();
          photoWrapper.append(photo);
          photoWrapper.scrollLeft = 0;
          return;
        }
      }

      function infiniteScroll() {
        photoWrapper.scrollLeft++;
        requestAnimationFrame(infiniteScroll);
      }

      infiniteScroll();

      return () => {
        photoWrapper.removeEventListener("scroll", () => {
          photos.forEach(checkPosition);
        });
      };
    }
  }, []);




  return (
    <>
    <div className='home_main_box'>
      <Navbar />
      {/* ===========================================hero banner==================================================== */}
      <div
        className="th-hero-wrapper hero-1"
         id="hero"
        style={{ backgroundImage: `url('/hero-bg1-1.png')` }}

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



    {/* =========================================# About Our Gaming Site============================================== */}
    <div className="overflow-hidden space" id="about-sec">
        <div className="about-bg-img shape-mockup" data-top="0" data-left="0"><img src="about-bg1.png"
                 alt="img"/></div>
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



       {/* -------------------------------# Releases The Latest Game ---------------------------------------------------- */}
       
       <section className="overflow-hidden slide">
        <div className="container th-container2 "  >
            <div className="game-sec-wrap1 space" 
             style={{ backgroundImage: `url('/game-sec1-bg.png')` }}
      
            >
                <div className="title-area text-center custom-anim-top wow animated" data-wow-duration="1.5s"
                    data-wow-delay="0.1s"><span className="sub-title"># Releases The Latest Game</span>
                    <h2 className="sec-title">Game On, Power Up, Win Big <span className="text-theme">!</span></h2>
                </div>
                <div className="slider-area">
                    <div className="swiper th-slider game-slider-1" id="gameSlider1"
                                        ref={swiperGame}>
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
                    <div className="swiper-button-prev" onClick={handleGamePrev}></div>
                    <div className="swiper-button-next" onClick={handleGameNext}></div>
                </div>
            </div>
        </div>
    </section>


     {/* ------------------------------# World Best Facilities Game------------------------------------------------------------------- */}

     <section className="space">
      <div className="container" style={{background: '#0F1C23'}}>
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
                  <span className="feature-card-icon-mask bb" style={{ backgroundImage: `url('/about_feature_1.svg')` }}></span>
                  <img src="/about_feature_1.svg" alt="img" />
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
                  <span className="feature-card-icon-mask bb" style={{ backgroundImage: `url('/about_feature_2.svg')` }}></span>
                  <img src="/about_feature_2.svg" alt="img" />
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
                  <span className="feature-card-icon-mask bb" style={{ backgroundImage: `url('/about_feature_3.svg')` }}></span>
                  <img src="/about_feature_3.svg" alt="img" />
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

    
  
    {/* ------------------------------------# Top World Class Gamer----------------------------------------------------------------------------------------- */}
    <section className="team-sec-1 space">
        <div className="team-shape1-1 shape-mockup" data-top="0" data-right="0"><img src="/img/bg/team-sec1-bg.png"
                alt="img"/></div>
        <div className="container th-container3" style={{background: '#0F1C23'}}>
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-8">
                    <div className="title-area text-center custom-anim-top wow animated" data-wow-duration="1.5s"
                        data-wow-delay="0.2s"><span className="sub-title"># Top World Class Gamer</span>
                        <h2 className="sec-title">Let’s See Our Pro Players</h2>
                    </div>
                </div>
            </div>
            <div className="slider-area team-slider1">
                <div className="swiper  th-slider has-shadow  mySwiper  swiper-container" id="teamSlider1" ref={swiperRef}>
                    <div className="swiper-wrapper" >
                        <div className="swiper-slide  winer_card">
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
                        <div className="swiper-slide winer_card" >
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
                        <div className="swiper-slide winer_card" >
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
                        <div className="swiper-slide winer_card">
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
                        <div className="swiper-slide winer_card" >
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
                        <div className="swiper-slide winer_card" >
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
                        <div className="swiper-slide winer_card" >
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
                        <div className="swiper-slide winer_card">
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
                        <div className="swiper-slide winer_card" >
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
                        <div className="swiper-slide winer_card" >
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
                </div>
                
                      <div className="swiper-button-prev" onClick={handlePrev}></div>
                       <div className="swiper-button-next" onClick={handleNext}></div>
            </div>
        </div>
    </section>
    



    {/* ====================================================game shop=============================================== */}
    <section className="space">
        <div className="container" style={{ background: '#0F1C23'}}>
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
                                className="slider-arrow style2 default" onClick={handleShopPrev}><FontAwesomeIcon icon={faCaretLeft} /></button> <button
                                data-slider-next="#productSlider1" className="slider-arrow style2 default" onClick={ handleShopNext }><FontAwesomeIcon icon={faCaretRight} /></button></div>
                    </div>
                </div>
            </div>
            <div className="swiper th-slider has-shadow" id="productSlider1" ref={swiperShop}>
                <div className="swiper-wrapper" >
                    <div className="swiper-slide"  >
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
                    <div className="swiper-slide" style={{margin: "0 5px"}}>
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
                    <div className="swiper-slide" style={{margin: "0 5px"}}>
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
                    <div className="swiper-slide" style={{margin: "0 5px"}}>
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
                    <div className="swiper-slide" style={{margin: "0 5px"}}>
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
                    <div className="swiper-slide" style={{margin: "0 5px"}}>
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
                    <div className="swiper-slide" style={{margin: "0 5px"}}>
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
                    <div className="swiper-slide" style={{margin: "0 5px"}}>
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
            </div>
            <div className="d-block d-md-none mt-40 text-center">
                <div className="icon-box"><button data-slider-prev="#productSlider1" className="slider-arrow style2 default" onClick={handleShopPrev}>
                <FontAwesomeIcon icon={faCaretLeft} /></button> <button data-slider-next="#productSlider1"
                        className="slider-arrow style2 default" onClick={handleShopNext}><FontAwesomeIcon icon={faCaretRight} /></button></div>
            </div>
        </div>
    </section>
{/* -----------------------------------------------------------------bar ----------------------------------------------------- */}
<div className="container th-container4">
      <div className="cta-area-1">
        <div className="cta-bg-shape-border">
          
        </div>
        <div className="cta-wrap-bg bg-repeat" data-bg-src="assets/img/bg/jiji-bg.png" data-mask-src="/img/shape/cta-bg-shape1.svg">
          <div className="cta-bg-img"><img src="/img/bg/cta-sec1-bg.png" alt="img" /></div>
          <div className="cta-thumb"><img src="/img/normal/cta1-1.png" alt="img" /></div>
        </div>
        <div className="cta-wrap">
          <div className="row">
            <div className="col-xl-5">
              <div className="title-area mb-0 custom-anim-left wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                <span className="sub-title"># World Best Gaming Site</span>
                <h2 className="sec-title">Join Bame Esports to Become Next <span className="text-theme fw-medium">PRO Gamer Today !</span></h2>
                <p className="mt-30 mb-30">Esports and gaming facilities require thoughtful consideration of various elements to create an environment that caters to the needs of gamers and enhances the overall gaming experience.</p>
                <a href="contact.html" className="th-btn">JOIN COMMUNITY <i className="fa-solid fa-arrow-right ms-2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

     {/* ==================================================news------------------------------------------------- */}
     <section className="" id="blog-sec">
        <div className="container" >
            <div className="title-area text-center custom-anim-top wow animated" data-wow-duration="1.5s"
                data-wow-delay="0.2s"><span className="sub-title"># Latest News</span>
                <h2 className="sec-title">Stay Updated With Our Blog <span className="text-theme">!</span></h2>
            </div>
            <div className="slider-area">
                <div className="swiper th-slider has-shadow" id="blogSlider1" ref={swiperNews}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" style={{ width: '300px'}}>
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
                        <div className="swiper-slide" style={{ width: '300px'}}>
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
                        <div className="swiper-slide" style={{ width: '300px'}}>
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
                        <div className="swiper-slide" style={{ width: '300px'}}>
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
                        <div className="swiper-slide" style={{ width: '300px'}}>
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
                        <div className="swiper-slide" style={{ width: '300px'}}>
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
  <div className="client-area-1 overflow-hidden space">
        <div className="container-fluid p-0">
            <div className="swiper th-slider client-slider1"
                data-slider-options={{
        breakpoints: {
          0: { slidesPerView: 2 },
          400: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 7 },
          1300: { slidesPerView: 9 }
        },
        spaceBetween: 0,
        loop: true
      }}>
              
                 <div class="photo-wrapper" id="photoWrapper">
                            <div class="photo">
                             <img src="/img/client/1-1.png"/>
                             </div>
                             <div class="photo">
                            <img src="/img/client/1-2.png"/>
                              </div>
                           <div class="photo">
                           <img src="/img/client/1-3.png"/>
                           </div>
                           <div class="photo">
                          <img src="/img/client/1-3.png"/>
                          </div>
                          <div class="photo">
                           <img src="/img/client/1-4.png"/>
                           </div>
                            <div class="photo">
                              <img src="/img/client/1-5.png"/>
                           </div>
                           <div class="photo">
                              <img src="/img/client/1-6.png"/>
                           </div>
                           <div class="photo">
                              <img src="/img/client/1-7.png"/>
                           </div>
                           <div class="photo">
                              <img src="/img/client/1-8.png"/>
                           </div>
                           <div class="photo">
                              <img src="/img/client/1-9.png"/>
                           </div>
                           <div class="photo">
                             <img src="/img/client/1-1.png"/>
                             </div>
                             <div class="photo">
                            <img src="/img/client/1-2.png"/>
                              </div>
                           <div class="photo">
                           <img src="/img/client/1-3.png"/>
                           </div>
                           <div class="photo">
                          <img src="/img/client/1-3.png"/>
                          </div>
                          <div class="photo">
                           <img src="/img/client/1-4.png"/>
                           </div>
                            <div class="photo">
                              <img src="/img/client/1-5.png"/>
                           </div>
                           <div class="photo">
                              <img src="/img/client/1-6.png"/>
                           </div>
                           <div class="photo">
                              <img src="/img/client/1-7.png"/>
                           </div>
                           <div class="photo">
                              <img src="/img/client/1-8.png"/>
                           </div>
                           <div class="photo">
                              <img src="/img/client/1-9.png"/>
                           </div>
                  </div>
            </div>
        </div>
    </div>




    <Footer/>

     </div>
    </>
  );
}
