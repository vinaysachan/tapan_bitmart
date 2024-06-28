import { useState, useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import logo from './../assets/img/bitmap_logo.jpg';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { TbDeviceMobileDown } from "react-icons/tb";
import { BsGlobe } from "react-icons/bs";
import { FaSquareFacebook, FaSquareTwitter, FaSquareInstagram, FaSquareYoutube, FaTelegram, FaLinkedin, FaRedditAlien } from "react-icons/fa6";
import { TiSocialInstagram, TiSocialPinterest, TiSocialSkype, TiSocialVimeo } from "react-icons/ti";
import { SlSocialPintarest } from "react-icons/sl";



function AppLayout({ children }) {

    const tawkMessengerRef          =   useRef();
    const url = "#"
    return (<>
        <div className='container-fluid'>
            <header className="row">
                <nav class="navbar navbar-expand-lg bg-white shadow-sm py20">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <Link to="/" className="navbar-brand" >
                            <img src={logo} alt="Logo" width="110" style={{}}  className="d-inline-block align-text-top" />
                        </Link>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul class="navbar-nav me-auto mt8">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Buy & Sell</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Markets</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Trade</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Futures</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Earn</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">NFT</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">More</a>
                                </li>
                            </ul>
                            <ul className="d-flex nav navbar-nav ">
                                <li className="nav-item pt5">
                                    <Link className="nav-link" to={url}>Sign In</Link>
                                </li>
                                <li className="nav-item pt0">
                                    <Link className="nav-link border border-1 py10 px22 bg-primary-2 text-white" to={url}>Get Started</Link>
                                </li>
                                <li className="nav-item pt5">
                                    <Link className="nav-link" to={url}>
                                        <TbDeviceMobileDown className='fs20' />
                                    </Link>
                                </li>
                                <li className="nav-item pt5">
                                    <Link className="nav-link" to={url}>
                                        <BsGlobe className='fs20' />
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                {/* <div className='row'>
                    <div className='col-sm-12 text-center'>
                        <h1 className='h3 mt60'>Sign in to BitMart</h1>
                    </div>
                </div> */}
            </header>
        </div>
        {children}
        {/* <div className='container'>
            <div className='row'>
                <div className='mt10 text-center'>
                    <Link href="#" className='text-black text-decoration-none'>Forgot Password?</Link>
                    <Link href="#" className='text-black text-decoration-none ms20'> Don't have an account? </Link>
                    <Link href="#" className='text-black text-decoration-none ms20'> Privacy policy</Link>
                    <div className='text-center py10'>
                        <Link href="#" className='text-black text-decoration-none ms20'> Have an issue with two factor authentication ?</Link>
                    </div>
                </div>
            </div>
        </div> */}
        <div className='container my50'>
            <div className='row'>
                <div className='col-sm-2'>
                    <h4 className='text-black fs18 my15'>Company</h4>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>About Us</Link>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>Careers</Link>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>Partners</Link>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>News</Link>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>Cipholio Ventures</Link>
                </div>
                <div className='col-sm-2'>
                    <h4 className='text-black fs18 my15'>Product</h4>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>Spot</Link>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>Futures</Link>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>Earn</Link>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>Launchpad</Link>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>NFT</Link>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>API</Link>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>BMX</Link>
                </div>
                <div className='col-sm-2'>
                    <h4 className='text-black fs18 my15'>Service</h4>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>Fees</Link>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>Bug Bounty</Link>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>User Agreement</Link>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>Privacy Policy</Link>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>Affiliate</Link>
                </div>
                <div className='col-sm-2'>
                    <h4 className='text-black fs18 my15'>Support</h4>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>Help Center</Link>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>Apply to List</Link>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>Marketing Cooperation</Link>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>Contact Us</Link>
                    <Link to={url} className='text-decoration-none text-black d-block fs13 py7'>Official Verification</Link>
                </div>
                <div className='col-sm-4'>
                    <h4 className='text-black fs18 my15'>Social Media</h4>
                    <FaSquareFacebook className='fs20 text-black-50 mx8 my15' />
                    <FaSquareTwitter className='fs20 text-black-50 mx8 my15' />
                    <FaSquareInstagram className='fs20 text-black-50 mx8 my15' />
                    <FaSquareYoutube className='fs20 text-black-50 mx8 my15' />
                    <FaSquareInstagram className='fs20 text-black-50 mx8 my15' />
                    <FaTelegram className='fs20 text-black-50 mx8 my15' />
                    <FaLinkedin className='fs20 text-black-50 mx8 my15' />
                    <FaRedditAlien className='fs20 text-black-50 mx8 my15' />
                    <TiSocialInstagram className='fs20 text-black-50 mx8 my15' />
                    <TiSocialPinterest className='fs20 text-black-50 mx8 my15' />
                    <TiSocialSkype className='fs20 text-black-50 mx8 my15' />
                    <TiSocialVimeo className='fs20 text-black-50 mx8 my15' />
                    <SlSocialPintarest className='fs20 text-black-50 mx8 my15' />
                </div>
            </div>
        </div>
        <TawkMessengerReact
            propertyId="667ef8d49d7f358570d499cf"
            widgetId="1i1fvo0j1"
            ref={tawkMessengerRef}
        />
    </>)
}

export default AppLayout
