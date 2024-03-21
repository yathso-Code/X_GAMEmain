import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <>
        <footer class="footer-wrapper footer-layout2" data-bg-src="/img/bg/footer2-bg.png">
        <div class="container footer">
            <div class="text-center">
                <div class="footer-top-shape bg-repeat" data-bg-src="/img/bg/jiji-bg.png"></div>
            </div>
        </div>
        <div class="widget-area ">
            <div class="container ">
                <div class="row justify-content-between">
                    <div class="col-md-6 col-xl-auto">
                        <div class="widget footer-widget">
                            <div class="th-widget-about">
                                <div class="about-logo"><a href="index.html"><span data-mask-src="/img/logo.svg"
                                            class="logo-mask"></span> X-game</a>
                                </div>
                                <p class="about-text">Beyond esports tournaments, include a broader calendar of gaming
                                    events, conferences, and conventions.</p>
                                <h3 class="widget_title">Follow <span class="text-theme">With Us:</span></h3>
                                <div class="th-widget-contact">
                                    <div class="th-social style-mask"> <a
                                            class="twitter" href="https://www.twitter.com/"><img
                                                src="/img/icon/x-twitter-icon.svg" alt="icon"/></a><a
                                            class="instagram" href="https://www.instagram.com/"><img
                                                src="/img/icon/instagram-icon.svg" alt="icon"/> </a> <a class="google-play"
                                            href="https://www.google.com/"><img
                                                src="/img/icon/google-playstore-icon.svg" alt="icon"/></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-auto">
                        <div class="widget widget_nav_menu footer-widget">
                            <h3 class="widget_title">Useful Link</h3>
                            <div class="menu-all-pages-container">
                                <ul class="menu">
                                    <li><a href="blog.html"><i class="far fa-angle-right"></i>Gaming</a></li>
                                    <li><a href="blog.html"><i class="far fa-angle-right"></i>Products</a></li>
                                    <li><a href="blog.html"><i class="far fa-angle-right"></i>All NFTs</a></li>
                                    <li><a href="blog.html"><i class="far fa-angle-right"></i>Domain Name</a></li>
                                    <li><a href="blog.html"><i class="far fa-angle-right"></i>Social Network</a></li>
                                    <li><a href="blog.html"><i class="far fa-angle-right"></i>Collectibles</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-auto">
                        <div class="widget widget_nav_menu footer-widget">
                            <h3 class="widget_title">Supports</h3>
                            <div class="menu-all-pages-container">
                                <ul class="menu">
                                    <li><a href="contact.html"><i class="far fa-angle-right"></i> Help & Support</a>
                                    </li>
                                    <li><a href="contact.html"><i class="far fa-angle-right"></i> Live Auctions</a></li>
                                    <li><a href="contact.html"><i class="far fa-angle-right"></i> 24/7 Supports</a></li>
                                    <li><a href="contact.html"><i class="far fa-angle-right"></i> Item Details</a></li>
                                    <li><a href="contact.html"><i class="far fa-angle-right"></i> Setting & Privacy</a>
                                    </li>
                                    <li><a href="contact.html"><i class="far fa-angle-right"></i> Our News</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-auto">
                        <div class="widget newsletter-widget footer-widget">
                            <h3 class="widget_title">Newsletter</h3>
                            <p class="footer-text">Subscribe to our newsletter to get our latest update & news consenter
                            </p>
                            <form class="newsletter-form">
                                <div class="form-group"><input class="form-control" type="email"
                                        placeholder="Email Address" required=""/> <button type="submit" class="th-btn"><i
                                            class="fas fa-paper-plane"></i></button></div>
                                <div class="btn-wrap"><a href="#"><img src="/img/normal/footer-apple-btn.png"
                                            alt="img"/></a><a href="#"><img
                                            src="/img/normal/footer-playstore-btn.png" alt="img"/></a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-wrap text-center bg-repeat" data-bg-src="/img/bg/jiji-bg.png">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-6">
                        <p class="copyright-text bg-repeat" data-bg-src="/img/bg/jiji-bg.png"><i
                                class="fal fa-copyright"></i> Copyright 2024 <a href="index.html">X-game</a> All Rights
                            Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div class="scroll-top"><svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
    <path
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        style={{
          transition: 'stroke-dashoffset 10ms linear 0s',
          strokeDasharray: '307.919, 307.919',
          strokeDashoffset: '307.919'
        }}
      />
        </svg></div>
    </>
  )
}

export default Footer
