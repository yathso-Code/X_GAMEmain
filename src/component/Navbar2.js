"use client"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight, faMagnifyingGlass,faBars } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';
import { useState,  useEffect } from 'react';


const Navbar2 = () => {
  return (
    <>
       <div class="sidemenu-wrapper sidemenu-cart">
        <div class="sidemenu-content"><button class="closeButton sideMenuCls"><i class="far fa-times"></i></button>
            <div class="widget woocommerce widget_shopping_cart">
                <h3 class="widget_title">Shopping cart</h3>
                <div class="widget_shopping_cart_content">
                    <ul class="woocommerce-mini-cart cart_list product_list_widget">
                        <li class="woocommerce-mini-cart-item mini_cart_item"><a href="#"
                                class="remove remove_from_cart_button"><i class="far fa-times"></i></a> <a href="#"><img
                                    src="assets/img/product/product_thumb_1_1.png" alt="Cart Image"/>Gaming Headphone</a>
                            <span class="quantity">1 × <span class="woocommerce-Price-amount amount"><span
                                        class="woocommerce-Price-currencySymbol">$</span>940.00</span></span></li>
                        <li class="woocommerce-mini-cart-item mini_cart_item"><a href="#"
                                class="remove remove_from_cart_button"><i class="far fa-times"></i></a> <a href="#"><img
                                    src="assets/img/product/product_thumb_1_2.png" alt="Cart Image"/>Gaming Mouse</a>
                            <span class="quantity">1 × <span class="woocommerce-Price-amount amount"><span
                                        class="woocommerce-Price-currencySymbol">$</span>899.00</span></span></li>
                        <li class="woocommerce-mini-cart-item mini_cart_item"><a href="#"
                                class="remove remove_from_cart_button"><i class="far fa-times"></i></a> <a href="#"><img
                                    src="assets/img/product/product_thumb_1_3.png" alt="Cart Image"/>Gaming Keyboard</a>
                            <span class="quantity">1 × <span class="woocommerce-Price-amount amount"><span
                                        class="woocommerce-Price-currencySymbol">$</span>756.00</span></span></li>
                        <li class="woocommerce-mini-cart-item mini_cart_item"><a href="#"
                                class="remove remove_from_cart_button"><i class="far fa-times"></i></a> <a href="#"><img
                                    src="assets/img/product/product_thumb_1_4.png" alt="Cart Image"/>Gaming Chair</a>
                            <span class="quantity">1 × <span class="woocommerce-Price-amount amount"><span
                                        class="woocommerce-Price-currencySymbol">$</span>723.00</span></span></li>
                        <li class="woocommerce-mini-cart-item mini_cart_item"><a href="#"
                                class="remove remove_from_cart_button"><i class="far fa-times"></i></a> <a href="#"><img
                                    src="assets/img/product/product_thumb_1_5.png" alt="Cart Image"/>Microphone G9000</a>
                            <span class="quantity">1 × <span class="woocommerce-Price-amount amount"><span
                                        class="woocommerce-Price-currencySymbol">$</span>1080.00</span></span></li>
                    </ul>
                    <p class="woocommerce-mini-cart__total total"><strong>Subtotal:</strong> <span
                            class="woocommerce-Price-amount amount"><span
                                class="woocommerce-Price-currencySymbol">$</span>4398.00</span></p>
                    <p class="woocommerce-mini-cart__buttons buttons"><a href="cart.html" class="th-btn wc-forward">View
                            cart <span class="icon"><i class="fa-solid fa-arrow-up-right ms-3"></i></span></a> <a
                            href="checkout.html" class="th-btn checkout wc-forward">Checkout <span class="icon"><i
                                    class="fa-solid fa-arrow-up-right ms-3"></i></span></a></p>
                </div>
            </div>
        </div>
    </div>
    <div class="sidemenu-wrapper sidemenu-info d-none d-lg-block">
        <div class="sidemenu-content"><button class="closeButton sideMenuCls"><i class="far fa-times"></i></button>
            <div class="widget footer-widget">
                <div class="th-widget-about">
                    <div class="about-logo"><a href="index.html"><span data-mask-src="assets/img/logo.svg"
                                class="logo-mask"></span> <img src="assets/img/logo.svg" alt="Bame"/></a></div>
                    <p class="about-text">Beyond esports tournaments, include a broader calendar of gaming events,
                        conferences, and conventions.</p>
                    <h3 class="widget_title">Follow <span class="text-theme">With Us:</span></h3>
                    <div class="th-widget-contact">
                        <div class="th-social style-mask"><a class="facebook" href="https://www.facebook.com/"><i
                                    class="fab fa-facebook-f"></i></a> <a class="twitter"
                                href="https://www.twitter.com/"><img src="assets/img/icon/x-twitter-icon.svg"
                                    alt="icon"/></a><a class="instagram" href="https://www.instagram.com/"><img
                                    src="assets/img/icon/instagram-icon.svg" alt="icon"/> </a><a class="linkedin"
                                href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i></a> <a
                                class="google-play" href="https://www.google.com/"><img
                                    src="assets/img/icon/google-playstore-icon.svg" alt="icon"/></a></div>
                    </div>
                </div>
            </div>
            <div class="widget">
                <h3 class="widget_title">Recent Posts</h3>
                <div class="recent-post-wrap">
                    <div class="recent-post">
                        <div class="media-img"><a href="blog-details.html"><img
                                    src="assets/img/blog/recent-post-1-1.jpg" alt="Blog Image"/></a></div>
                        <div class="media-body">
                            <h4 class="post-title"><a class="text-inherit" href="blog-details.html">A Day in the Life of
                                    an Esports Event & Enjoy</a></h4>
                            <div class="recent-post-meta"><a href="blog.html"><i class="fa-light fa-calendar"></i>30
                                    Nov, 2024</a></div>
                        </div>
                    </div>
                    <div class="recent-post">
                        <div class="media-img"><a href="blog-details.html"><img
                                    src="assets/img/blog/recent-post-1-2.jpg" alt="Blog Image"/></a></div>
                        <div class="media-body">
                            <h4 class="post-title"><a class="text-inherit" href="blog-details.html">Strategies for
                                    Dominating Your Favorite Game</a></h4>
                            <div class="recent-post-meta"><a href="blog.html"><i class="fa-light fa-calendar"></i>05
                                    Dec, 2024</a></div>
                        </div>
                    </div>
                    <div class="recent-post">
                        <div class="media-img"><a href="blog-details.html"><img
                                    src="assets/img/blog/recent-post-1-3.jpg" alt="Blog Image"/></a></div>
                        <div class="media-body">
                            <h4 class="post-title"><a class="text-inherit" href="blog-details.html">Behind the Scenes of
                                    Your Favorite Game</a></h4>
                            <div class="recent-post-meta"><a href="blog.html"><i class="fa-light fa-calendar"></i>09
                                    Sep, 2024</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="widget newsletter-widget">
                <h3 class="widget_title">Newsletter</h3>
                <p class="footer-text">Subscribe to our newsletter to get our latest update & news consenter</p>
                <form class="newsletter-form">
                    <div class="form-group"><input class="form-control" type="email" placeholder="Email Address"
                            required=""/> <button type="submit" class="th-btn"><i
                                class="far fa-paper-plane"></i></button></div>
                </form>
            </div>
        </div>
    </div>
    <div class="popup-search-box d-none d-lg-block"><button class="searchClose"><i class="fal fa-times"></i></button>
        <form action="#"><input type="text" placeholder="What are you looking for?"/> <button type="submit"><i
                    class="fal fa-search"></i></button></form>
    </div>
    <div class="th-menu-wrapper">
        <div class="th-menu-area text-center"><button class="th-menu-toggle"><i class="fal fa-times"></i></button>
            <div class="mobile-logo"><a href="index.html"><span data-mask-src="assets/img/logo.svg"
                        class="logo-mask"></span><img src="assets/img/logo.svg" alt="Bame"/></a></div>
            <div class="th-mobile-menu">
                <ul>
                    <li class="menu-item-has-children"><a href="index.html">HOME</a>
                        <ul class="sub-menu">
                            <li><a href="index.html">Home One</a></li>
                            <li><a href="home-2.html">Home Two</a></li>
                        </ul>
                    </li>
                    <li><a href="about.html">ABOUT US</a></li>
                    <li class="menu-item-has-children"><a href="#">TOURNAMENT</a>
                        <ul class="sub-menu">
                            <li><a href="tournament.html">Tournament</a></li>
                            <li><a href="tournament-details.html">Tournament Details</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children"><a href="#">BLOG</a>
                        <ul class="sub-menu">
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children"><a href="#">PAGES</a>
                        <ul class="sub-menu">
                            <li class="menu-item-has-children"><a href="#">Shop</a>
                                <ul class="sub-menu">
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="shop-details.html">Shop Details</a></li>
                                    <li><a href="cart.html">Cart Page</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                </ul>
                            </li>
                            <li><a href="team.html">Players</a></li>
                            <li><a href="team-details.html">Players Details</a></li>
                            <li><a href="game.html">Game</a></li>
                            <li><a href="game-details.html">Game Details</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="point-table.html">Point Table</a></li>
                            <li><a href="error.html">Error Page</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">CONTACT</a></li>
                </ul>
            </div>
        </div>
    </div>
    
    <header class="th-header header-default">
        <div class="sticky-wrapper">
            <div class="menu-area">
                <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-auto">
                            <div class="header-logo"><Link href="index.html"><span 
                                        class="logo-mask">GAME</span> <img src="https://plsc.cards/images/Logo.png" alt="PLSC"/></Link></div>
                        </div>
                        <div class="col-auto">
                            <nav class="main-menu d-none d-lg-inline-block">
                                <ul>
                                    <li class="menu-item-has-children"><a href="index.html">HOME</a>
                                        <ul class="sub-menu">
                                            <li><a href="index.html">Home One</a></li>
                                            <li><a href="home-2.html">Home Two</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">ABOUT US</a></li>
                                    <li class="menu-item-has-children"><a href="#">TOURNAMENT</a>
                                        <ul class="sub-menu">
                                            <li><a href="tournament.html">Tournament</a></li>
                                            <li><a href="tournament-details.html">Tournament Details</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children"><a href="#">BLOG</a>
                                        <ul class="sub-menu">
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children"><a href="#">PAGES</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item-has-children"><a href="#">Shop</a>
                                                <ul class="sub-menu">
                                                    <li><a href="shop.html">Shop</a></li>
                                                    <li><a href="shop-details.html">Shop Details</a></li>
                                                    <li><a href="cart.html">Cart Page</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="team.html">Players</a></li>
                                            <li><a href="team-details.html">Players Details</a></li>
                                            <li><a href="game.html">Game</a></li>
                                            <li><a href="game-details.html">Game Details</a></li>
                                            <li><a href="gallery.html">Gallery</a></li>
                                            <li><a href="point-table.html">Point Table</a></li>
                                            <li><a href="error.html">Error Page</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">CONTACT</a></li>
                                </ul>
                            </nav>
                            <div class="header-button d-flex d-lg-none"><button type="button"
                                    class="th-menu-toggle"><span class="btn-border"></span><FontAwesomeIcon icon={faBars} className='mobile_nav' /> </button></div>
                        </div>
                        <div class="col-auto d-none d-xl-block">
                            <div class="header-button"><button type="button" class="simple-icon searchBoxToggler"><FontAwesomeIcon icon={faMagnifyingGlass} /></button> <button type="button"
                                    class="simple-icon sideMenuInfo"><FontAwesomeIcon icon={faBars} /></button>
                                <div class="d-xxl-block d-none"><a href="contact.html" class="th-btn"><i
                                            class="fa-brands fa-twitch me-1"></i> Live Streaming</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="logo-bg"></div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Navbar2
