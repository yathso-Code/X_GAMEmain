import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight, faMagnifyingGlass,faBars } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
  return (
    <>
       <header className="th-header header-layout1">
        <div className="header-top">
            <div className="container">
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
                                    className="th-menu-toggle"><span className="btn-border"><FontAwesomeIcon icon={faBars} /> </span></button></div>
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
    </>
  )
}

export default Navbar
