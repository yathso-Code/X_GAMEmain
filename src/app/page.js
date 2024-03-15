"use client"
import Link from 'next/link';
import Image from 'next/image'
import './globals.css';
import Navbar from '../../component/Navbar';


export default function Home() {
  return (
   <>
    <Navbar/>
    {/* ===========================================hero banner==================================================== */}
    <div className="th-hero-wrapper hero-1" id="hero" data-bg-src="assets/img/hero/hero-bg1-1.png">
        <div className="container">
            <div className="hero-style1 text-center"><span className="sub-title custom-anim-top wow animated"
                    data-wow-duration="1.2s" data-wow-delay="0.1s"># World Class eSports & Gaming Site</span>
                <h1 className="hero-title"><span className="title1 custom-anim-top wow animated" data-wow-duration="1.1s"
                        data-wow-delay="0.3s" data-bg-src="assets/img/hero/hero-title-bg-shape1.svg">SHAPING THE FUTURE
                        OF</span> <span className="title2 custom-anim-top wow animated" data-wow-duration="1.1s"
                        data-wow-delay="0.4s">ESPORTS</span></h1>
                <div className="btn-group custom-anim-top wow animated" data-wow-duration="1.2s" data-wow-delay="0.7s"><a
                        href="about.html" className="th-btn">EXPLORE MORE <i className="fa-solid fa-arrow-right ms-2"></i></a>
                    <a href="tournament.html" className="th-btn style2">BROWSE GAMES <i
                            className="fa-solid fa-arrow-right ms-2"></i></a></div>
            </div>
        </div>
    </div>
    {/* ========================================hero banner end====================================================== */}

    <div className="swiper-slide">
            <div className="hero-cta-inner">
                <div className="container th-container2">
                    <div className="hero-shape-area">
                        <div className="hero-bg-shape">
                            <div className="hero-bg-border-anime" data-mask-src="assets/img/hero/hero-bg-shape.png">
                            </div>
                            <svg viewBox="0 0 1600 520" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1599 30V490C1599 506.016 1586.02 519 1570 519H1062.43C1054.74 519 1047.36 515.945 1041.92 510.506L1009.49 478.08C1003.68 472.266 995.795 469 987.574 469H612.426C604.205 469 596.32 472.266 590.506 478.08L558.08 510.506C552.641 515.945 545.265 519 537.574 519H30C13.9837 519 1 506.016 1 490V30C1 13.9837 13.9837 1 30 1H400H537.574C545.265 1 552.641 4.05535 558.08 9.4939L590.506 41.9203C596.32 47.7339 604.205 51 612.426 51H987.574C995.795 51 1003.68 47.7339 1009.49 41.9203L1041.92 9.4939C1047.36 4.05535 1054.74 1 1062.43 1H1200H1570C1586.02 1 1599 13.9837 1599 30Z"
                                    fill="black" stroke="url(#paint0_linear2_47_22)" strokeWidth="2" />
                                <mask id="mask1_47_22" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0">
                                    <path
                                        d="M1600 490V30C1600 13.4315 1586.57 0 1570 0H1200H1062.43C1054.47 0 1046.84 3.1607 1041.21 8.7868L1008.79 41.2132C1003.16 46.8393 995.53 50 987.574 50H612.426C604.47 50 596.839 46.8393 591.213 41.2132L558.787 8.7868C553.161 3.16071 545.53 0 537.574 0H400H30C13.4315 0 0 13.4314 0 30V490C0 506.569 13.4315 520 30 520H537.574C545.53 520 553.161 516.839 558.787 511.213L591.213 478.787C596.839 473.161 604.47 470 612.426 470H987.574C995.53 470 1003.16 473.161 1008.79 478.787L1041.21 511.213C1046.84 516.839 1054.47 520 1062.43 520H1570C1586.57 520 1600 506.569 1600 490Z"
                                        fill="black" />
                                </mask>
                                {/* Additional SVG elements */}
                            </svg>
                            <div className="verses-thumb d-xl-none d-block"><img
                                src="assets/img/tournament/game-vs1.svg" alt="tournament image" /></div>
                            <div className="hero-img1 z-index-common" data-ani="slideinleft" data-ani-delay="0.4s"><img
                                src="assets/img/hero/hero-1-3.png" alt="Image" /></div>
                            <div className="hero-img2 z-index-common" data-ani="slideinright" data-ani-delay="0.4s"><img
                                src="assets/img/hero/hero-1-4.png" alt="Image" /></div>
                        </div>
                        <div className="title-area mb-0">
                            <h2 className="sec-title text-white custom-anim-top wow animated" data-wow-duration="1.3s"
                                data-wow-delay="0.1s">Join The Big Tournaments</h2>
                            <p className="mt-30 mb-30 custom-anim-top wow animated" data-wow-duration="1.3s"
                                data-wow-delay="0.2s">Beyond esports tournaments, include a broader calendar of
                                gaming events, conferences, and conventions. and connect with each other.</p>
                            <div className="btn-group custom-anim-top wow animated" data-wow-duration="1.3s"
                                data-wow-delay="0.2s"><a href="about.html" className="th-btn style-border"><span
                                    className="btn-border">JOIN NOW <i
                                        className="fa-solid fa-arrow-right ms-2"></i></span></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </>
  );
}
