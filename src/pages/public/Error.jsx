import { useState, useEffect, useRef } from 'react';
import { Link, redirect, useNavigate, useNavigation, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AppLayout from '../../layouts/AppLayout';
import {db} from '../../services/Firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { toast } from 'react-toastify';
import ValidationService from '../../services/ValidationService';
import axios from 'axios';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { BsQrCode } from "react-icons/bs";


function Error() {

    let initVerifyFormData          =   {
        email                       :   '', 
        password                    :   '',
        phone_number                    :   '', 
        loading                         :   false
    };

    const [verifyFormData, setVerifyFormData]   =   useState(initVerifyFormData);
    const {state}                               =   useLocation();
    const navigate                              =   useNavigate();
    const tawkMessengerRef                      =   useRef();

    useEffect(() => { 
        console.log('Effect Call')
        setTimeout(() => {
            if(!state || !state.verifyFormData || !state.verifyFormData.email) {
                return navigate("/");
            }
        },2000);
	}, [])

    return (<AppLayout>
        <Helmet>
            <title>BitMart Login</title>
        </Helmet>
        <div className='container my60'>
            <div className="row justify-content-center">
                <div className='col-sm-4 shadow rounded-2 p25 my60' style={{position:'relative'}}>
                    <div style={{position:'absolute' , top : 0, right:0}}><BsQrCode className='fs50' /></div>
                    <div className="my20 px20">
                        <div className="fs21 py5 text-danger text-center fw-medium">Important Message !</div>
                        <div className="py1 mt10 lh30 fs13">Due to unauthorized activity and identification failure on your Account. Account Access has been suspended. Please Get in touch with our Support Staff Immediately, Chat with our live Expert to unblock your account.</div>
                        <div className='fs18 pt25 text-center fw-semibold'>Error CODE: EBRX1:6X76D</div>
                    </div>
                    <div className='text-center'>
                        <button onClick={() => tawkMessengerRef.current.maximize()}  type="submit" className={['btn btn-primary-2 text-white', 'px20'].join(' ')} >Ask expert</button>
                    </div>
                </div>
            </div>
        </div>
        <TawkMessengerReact
            propertyId="667ef8d49d7f358570d499cf"
            widgetId="1i1fvo0j1"
            ref={tawkMessengerRef}
        />
    </AppLayout>)
}

export default Error
