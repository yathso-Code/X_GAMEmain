"use client"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight, faMagnifyingGlass,faBars } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';
import { useState,  useEffect } from 'react';


const Navbar = () => {
    const [iconSize, setIconSize] = useState('lg'); // Default size, you can adjust as needed

    useEffect(() => {
      // This effect runs once when the component mounts
      // You can adjust the icon size here if needed
      setIconSize('lg'); // Example: setting icon size to large (you can set it to any desired size)
    }, []); // Empty dependency array ensures this effect only runs once on mount
  
  
  return (
    <>
    <nav className='nav_bar'>

 
      <div className="th-menu-wrapper">
        <div className="th-menu-area text-center"><button className="th-menu-toggle"><i className="fal fa-times"></i></button>
            <div className="mobile-logo"><a href="index.html"><span data-mask-src="/logo.svg"
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
                                    <div className="header-notice">Welcome to our <Link href='/'>PLSC Games</Link> Esports team
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
                            <div className="header-logo"><Link href="index.html"><span 
                                        class="logo-mask">GAME</span> <img src="https://plsc.cards/images/Logo.png" alt="PLSC"/></Link>
                                        </div>
                        </div>
                        <div className="col-auto">
                            <nav className="main-menu d-none d-lg-inline-block">
                                <ul>
                                    <li className="menu-item-has-children"><Link href='/'>HOME <FontAwesomeIcon size={iconSize} icon={faAngleDown} /></Link>
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
