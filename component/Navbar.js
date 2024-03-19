import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight, faMagnifyingGlass,faBars } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';


const Navbar = () => {
 
 

  return (
    <>
    <nav className='nav_bar'>

<div id="QuickView" className="white-popup mfp-hide">
        <div className="container bg-black3 rounded-10">
            <div className="row gx-60">
                <div className="col-lg-6">
                    <div className="product-big-img">
                        <div className="img"><img src="/img/product/product_details_1_1.png" alt="Product Image"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 align-self-center">
                    <div className="product-about">
                        <p className="price">$120.85<del>$150.99</del></p>
                        <h2 className="product-title">Microphone G9000</h2>
                        <div className="product-rating">
                            <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span
                                    style={{width:'100%'}}>Rated <strong className="rating">5.00</strong> out of 5 based on
                                    <span className="rating">1</span> customer rating</span></div><a
                                href="shop-details.html" className="woocommerce-review-link">(<span className="count">4</span>
                                customer reviews)</a>
                        </div>
                        <p className="text">Syndicate customized growth strategies prospective human capital leverage
                            other's optimal e-markets without transparent catalysts for change. Credibly coordinate
                            highly efficient methods of empowerment cross unit solutions.</p>
                        <div className="mt-2 link-inherit">
                            <p><strong className="text-white me-3">Availability:</strong> <span className="stock in-stock"><i
                                        className="far fa-check-square me-2 ms-1"></i>In Stock</span></p>
                        </div>
                        <div className="actions">
                            <div className="quantity"><input type="number" className="qty-input" step="1" min="1" max="100"
                                    name="quantity" value="1" title="Qty"/> <button className="quantity-plus qty-btn"><i
                                        className="far fa-chevron-up"></i></button> <button
                                    className="quantity-minus qty-btn"><i className="far fa-chevron-down"></i></button></div>
                            <button className="th-btn">Add to Cart <span className="icon"><i
                                        className="fa-solid fa-arrow-right ms-3"></i></span></button> <a
                                href="wishlist.html" className="icon-btn"><i className="far fa-heart"></i></a>
                        </div>
                        <div className="product_meta"><span className="sku_wrapper">SKU: <span
                                    className="sku">Wheel-fits-chevy-camaro</span></span> <span className="posted_in">Category:
                                <a href="shop.html">Dresses & Bags</a></span> <span>Tags: <a
                                    href="shop.html">Products</a><a href="shop.html">Bags</a></span></div>
                    </div>
                </div>
            </div><button title="Close (Esc)" type="button" className="mfp-close text-white">×</button>
        </div>
    </div>




    <div className="sidemenu-wrapper sidemenu-cart">
        <div className="sidemenu-content"><button className="closeButton sideMenuCls"><i className="far fa-times"></i></button>
            <div className="widget woocommerce widget_shopping_cart">
                <h3 className="widget_title">Shopping cart</h3>
                <div className="widget_shopping_cart_content">
                    <ul className="woocommerce-mini-cart cart_list product_list_widget">
                        <li className="woocommerce-mini-cart-item mini_cart_item"><a href="#"
                                className="remove remove_from_cart_button"><i className="far fa-times"></i></a> <a href="#"><img
                                    src="assets/img/product/product_thumb_1_1.png" alt="Cart Image"/>Gaming Headphone</a>
                            <span className="quantity">1 × <span className="woocommerce-Price-amount amount"><span
                                        className="woocommerce-Price-currencySymbol">$</span>940.00</span></span></li>
                        <li className="woocommerce-mini-cart-item mini_cart_item"><a href="#"
                                className="remove remove_from_cart_button"><i className="far fa-times"></i></a> <a href="#"><img
                                    src="assets/img/product/product_thumb_1_2.png" alt="Cart Image"/>Gaming Mouse</a>
                            <span className="quantity">1 × <span className="woocommerce-Price-amount amount"><span
                                        className="woocommerce-Price-currencySymbol">$</span>899.00</span></span></li>
                        <li className="woocommerce-mini-cart-item mini_cart_item"><a href="#"
                                className="remove remove_from_cart_button"><i className="far fa-times"></i></a> <a href="#"><img
                                    src="assets/img/product/product_thumb_1_3.png" alt="Cart Image"/>Gaming Keyboard</a>
                            <span className="quantity">1 × <span className="woocommerce-Price-amount amount"><span
                                        className="woocommerce-Price-currencySymbol">$</span>756.00</span></span></li>
                        <li className="woocommerce-mini-cart-item mini_cart_item"><a href="#"
                                className="remove remove_from_cart_button"><i className="far fa-times"></i></a> <a href="#"><img
                                    src="assets/img/product/product_thumb_1_4.png" alt="Cart Image"/>Gaming Chair</a>
                            <span className="quantity">1 × <span className="woocommerce-Price-amount amount"><span
                                        className="woocommerce-Price-currencySymbol">$</span>723.00</span></span></li>
                        <li className="woocommerce-mini-cart-item mini_cart_item"><a href="#"
                                className="remove remove_from_cart_button"><i className="far fa-times"></i></a> <a href="#"><img
                                    src="assets/img/product/product_thumb_1_5.png" alt="Cart Image"/>Microphone G9000</a>
                            <span className="quantity">1 × <span className="woocommerce-Price-amount amount"><span
                                        className="woocommerce-Price-currencySymbol">$</span>1080.00</span></span></li>
                    </ul>
                    <p className="woocommerce-mini-cart__total total"><strong>Subtotal:</strong> <span
                            className="woocommerce-Price-amount amount"><span
                                className="woocommerce-Price-currencySymbol">$</span>4398.00</span></p>
                    <p className="woocommerce-mini-cart__buttons buttons"><a href="cart.html" className="th-btn wc-forward">View
                            cart <span className="icon"><i className="fa-solid fa-arrow-up-right ms-3"></i></span></a> <a
                            href="checkout.html" className="th-btn checkout wc-forward">Checkout <span className="icon"><i
                                    className="fa-solid fa-arrow-up-right ms-3"></i></span></a></p>
                </div>
            </div>
        </div>
    </div>




    <div className="sidemenu-wrapper sidemenu-info d-none d-lg-block">
        <div className="sidemenu-content"><button className="closeButton sideMenuCls"><i className="far fa-times"></i></button>
            <div className="widget footer-widget">
                <div className="th-widget-about">
                    <div className="about-logo"><a href="index.html"><span data-mask-src="assets/img/logo.svg"
                                className="logo-mask"></span> <img src="assets/img/logo.svg" alt="Bame"/></a></div>
                    <p className="about-text">Beyond esports tournaments, include a broader calendar of gaming events,
                        conferences, and conventions.</p>
                    <h3 className="widget_title">Follow <span className="text-theme">With Us:</span></h3>
                    <div className="th-widget-contact">
                        <div className="th-social style-mask"><a className="facebook" href="https://www.facebook.com/"><i
                                    className="fab fa-facebook-f"></i></a> <a className="twitter"
                                href="https://www.twitter.com/"><img src="/img/icon/x-twitter-icon.svg"
                                    alt="icon"/></a><a className="instagram" href="https://www.instagram.com/"><img
                                    src="/img/icon/instagram-icon.svg" alt="icon"/> </a><a className="linkedin"
                                href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a> <a
                                className="google-play" href="https://www.google.com/"><img
                                    src="/img/icon/google-playstore-icon.svg" alt="icon"/></a></div>
                    </div>
                </div>
            </div>
            <div className="widget">
                <h3 className="widget_title">Recent Posts</h3>
                <div className="recent-post-wrap">
                    <div className="recent-post">
                        <div className="media-img"><a href="blog-details.html"><img
                                    src="/img/blog/recent-post-1-1.jpg" alt="Blog Image"/></a></div>
                        <div className="media-body">
                            <h4 className="post-title"><a className="text-inherit" href="blog-details.html">A Day in the Life of
                                    an Esports Event & Enjoy</a></h4>
                            <div className="recent-post-meta"><a href="blog.html"><i className="fa-light fa-calendar"></i>30
                                    Nov, 2024</a></div>
                        </div>  
                    </div>
                    <div className="recent-post">
                        <div className="media-img"><a href="blog-details.html"><img
                                    src="/img/blog/recent-post-1-2.jpg" alt="Blog Image"/></a></div>
                        <div className="media-body">
                            <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Strategies for
                                    Dominating Your Favorite Game</a></h4>
                            <div className="recent-post-meta"><a href="blog.html"><i className="fa-light fa-calendar"></i>05
                                    Dec, 2024</a></div>
                        </div>
                    </div>
                    <div className="recent-post">
                        <div className="media-img"><a href="blog-details.html"><img
                                    src="/img/blog/recent-post-1-3.jpg" alt="Blog Image"/></a></div>
                        <div className="media-body">
                            <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Behind the Scenes of
                                    Your Favorite Game</a></h4>
                            <div className="recent-post-meta"><a href="blog.html"><i className="fa-light fa-calendar"></i>09
                                    Sep, 2024</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="widget newsletter-widget">
                <h3 className="widget_title">Newsletter</h3>
                <p className="footer-text">Subscribe to our newsletter to get our latest update & news consenter</p>
                <form className="newsletter-form">
                    <div className="form-group"><input className="form-control" type="email" placeholder="Email Address"
                            required=""/> <button type="submit" className="th-btn"><i
                                className="far fa-paper-plane"></i></button></div>
                </form>
            </div>
        </div>
    </div>



    <div className="popup-search-box d-none d-lg-block"><button className="searchClose"><i className="fal fa-times"></i></button>
        <form action="#"><input type="text" placeholder="What are you looking for?"/> <button type="submit"><i
                    className="fal fa-search"></i></button></form>
    </div>
   

      <div className="th-menu-wrapper">
        <div className="th-menu-area text-center"><button className="th-menu-toggle"><i className="fal fa-times"></i></button>
            <div className="mobile-logo"><a href="index.html"><span data-mask-src="assets/img/logo.svg"
                        className="logo-mask"></span><img src="logo.svg" alt="Bame"/></a></div>
            <div className="th-mobile-menu">
                <ul>
                    <li className="menu-item-has-children"><a href="index.html">HOME</a>
                        <ul className="sub-menu">
                            <li><a href="index.html">Home One</a></li>
                            <li><a href="home-2.html">Home Two</a></li>
                        </ul>
                    </li>
                    <li><a href="about.html">ABOUT US</a></li>
                    <li className="menu-item-has-children"><a href="#">TOURNAMENT</a>
                        <ul className="sub-menu">
                            <li><a href="tournament.html">Tournament</a></li>
                            <li><a href="tournament-details.html">Tournament Details</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children"><a href="#">BLOG</a>
                        <ul className="sub-menu">
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children"><a href="#">PAGES</a>
                        <ul className="sub-menu">
                            <li className="menu-item-has-children"><a href="#">Shop</a>
                                <ul className="sub-menu">
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


       <header className="th-header header-layout1">
        <div className="header-top">
            <div className="container" >
                <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
                    <div className="col-auto d-none d-lg-block">
                        <p className="header-notice"></p>
                        <div className="header-links">
                            <ul>
                                <li>
                                    <div className="header-notice">Welcome to our <Link href='/'>x-game</Link> Esports team
                                    </div>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="header-links">
                            <ul>
                                <li><a href="https://www.facebook.com/">Facebook</a></li>
                                <li><a href="https://www.twitter.com/">Twitter</a></li>
                                <li><a href="https://www.pinteres
                                t.com/">Pinterest</a></li>
                                <li><a href="https://www.instagram.com/">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="sticky-wrapper">
            <div className="menu-area">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                            <div className="header-logo"><Link href="/">X-Game </Link></div>
                        </div>
                        <div className="col-auto">
                            <nav className="main-menu d-none d-lg-inline-block">
                                <ul>
                                    <li className="menu-item-has-children"><Link href='/'>HOME <FontAwesomeIcon icon={faAngleDown} /></Link>
                                        <ul className="sub-menu">
                                            <li><a href="index.html">Home One</a></li>
                                            <li><a href="home-2.html">Home Two</a></li>
                                        </ul>
                                    </li>
                                    <li><Link href="/about">ABOUT US</Link></li>
                                    <li className="menu-item-has-children"><a href="#">TOURNAMENT <FontAwesomeIcon icon={faAngleDown} /></a>
                                        <ul className="sub-menu">
                                            <li><a href="tournament.html">Tournament</a></li>
                                            <li><a href="tournament-details.html">Tournament Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#">BLOG <FontAwesomeIcon icon={faAngleDown} /></a>
                                        <ul className="sub-menu">
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#">PAGES <FontAwesomeIcon icon={faAngleDown} /></a>
                                        <ul className="sub-menu">
                                            <li className="menu-item-has-children"><a href="#">Shop <FontAwesomeIcon icon={faAngleRight} /></a>
                                                <ul className="sub-menu">
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
                            <div className="header-button d-flex d-lg-none"><button type="button"
                                    className="th-menu-toggle"><span className="btn-border"><FontAwesomeIcon icon={faBars} className='mobile_nav' /> </span></button></div>
                        </div>
                        <div className="col-auto d-none d-xl-block">
                            <div className="header-button"><button type="button" className="simple-icon searchBoxToggler"><FontAwesomeIcon icon={faMagnifyingGlass} /></button> <button type="button"
                                    className="simple-icon sideMenuInfo"><FontAwesomeIcon icon={faBars} /></button>
                                <div className="d-xxl-block d-none"><a href="contact.html" className="th-btn"><i
                                            className="fa-brands fa-twitch me-1"></i> Live Streaming</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logo-bg"></div>
            </div>
        </div>
    </header>
    </nav>
    </>
  )
}

export default Navbar
