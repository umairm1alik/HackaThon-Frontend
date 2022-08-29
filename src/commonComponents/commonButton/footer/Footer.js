// import React from 'react'
// import "./footer.css"
// function Footer() {
//   return (
//     <div>
//       <footer className="footer-section">
//         <div className="container">
//             <div className="footer-cta pt-5 pb-5">
//                 <div className="row">
//                     <div className="col-xl-4 col-md-4 mb-30">
//                         <div className="single-cta">
//                             <i className="fas fa-map-marker-alt"></i>
//                             <div className="cta-text">
//                                 <h4>Find us</h4>
//                                 <span>1010 Avenue, sw 54321, chandigarh</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xl-4 col-md-4 mb-30">
//                         <div className="single-cta">
//                             <i className="fas fa-phone"></i>
//                             <div className="cta-text">
//                                 <h4>Call us</h4>
//                                 <span>9876543210 0</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xl-4 col-md-4 mb-30">
//                         <div className="single-cta">
//                             <i className="far fa-envelope-open"></i>
//                             <div className="cta-text">
//                                 <h4>Mail us</h4>
//                                 <span>mail@info.com</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="footer-content pt-5 pb-5">
//                 <div className="row">
//                     <div className="col-xl-4 col-lg-4 mb-50">
//                         <div className="footer-widget">
//                             <div className="footer-logo">
//                                 <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo"/></a>
//                             </div>
//                             <div className="footer-text">
//                                 <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
//                                 elit,Lorem ipsum dolor sit amet.</p>
//                             </div>
//                             <div className="footer-social-icon">
//                                 <span>Follow us</span>
//                                 <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
//                                 <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
//                                 <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
//                         <div className="footer-widget">
//                             <div className="footer-widget-heading">
//                                 <h3>Useful Links</h3>
//                             </div>
//                             <ul>
//                                 <li><a href="#">Home</a></li>
//                                 <li><a href="#">about</a></li>
//                                 <li><a href="#">services</a></li>
//                                 <li><a href="#">portfolio</a></li>
//                                 <li><a href="#">Contact</a></li>
//                                 <li><a href="#">About us</a></li>
//                                 <li><a href="#">Our Services</a></li>
//                                 <li><a href="#">Expert Team</a></li>
//                                 <li><a href="#">Contact us</a></li>
//                                 <li><a href="#">Latest News</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
//                         <div className="footer-widget">
//                             <div className="footer-widget-heading">
//                                 <h3>Subscribe</h3>
//                             </div>
//                             <div className="footer-text mb-25">
//                                 <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
//                             </div>
//                             <div className="subscribe-form">
//                                 <form action="#">
//                                     <input type="text" placeholder="Email Address"/>
//                                     <button><i className="fab fa-telegram-plane"></i></button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="copyright-area">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-xl-6 col-lg-6 text-center text-lg-left">
//                         <div className="copyright-text">
//                             <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
//                         </div>
//                     </div>
//                     <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
//                         <div className="footer-menu">
//                             <ul>
//                                 <li><a href="#">Home</a></li>
//                                 <li><a href="#">Terms</a></li>
//                                 <li><a href="#">Privacy</a></li>
//                                 <li><a href="#">Policy</a></li>
//                                 <li><a href="#">Contact</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </footer>
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import logo from "../../../images/real-estate-logo.jpg"

const Footer = () => {
    return (
        <CDBFooter className="shadow">
            <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
                <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                    <CDBBox>
                        <a href="/" className="d-flex align-items-center p-0 text-dark">
                            <img alt="logo" src={logo} width="50px" />
                            <span className="ml-3 h5 font-weight-bold">YourHouse</span>
                        </a>
                        <p className="my-3" style={{ width: '250px' }}>
                            We are creating High Quality Resources and tools for you to access houses you like the most.
                        </p>
                        <CDBBox display="flex" className="mt-4">
                            <CDBBtn flat color="dark">
                                <CDBIcon fab icon="facebook-f" />
                            </CDBBtn>
                            <CDBBtn flat color="dark" className="mx-3">
                                <CDBIcon fab icon="twitter" />
                            </CDBBtn>
                            <CDBBtn flat color="dark" className="p-2">
                                <CDBIcon fab icon="instagram" />
                            </CDBBtn>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            YourHouse
                        </p>
                        <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                            <CDBFooterLink href="/">Resources</CDBFooterLink>
                            <CDBFooterLink href="/">About Us</CDBFooterLink>
                            <CDBFooterLink href="/">Contact</CDBFooterLink>
                            <CDBFooterLink href="/">Blog</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            Help
                        </p>
                        <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                            <CDBFooterLink href="/">Support</CDBFooterLink>
                            <CDBFooterLink href="/">Sign Up</CDBFooterLink>
                            <CDBFooterLink href="/">Sign In</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            Products
                        </p>
                        <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                            <CDBFooterLink href="/">Windframe</CDBFooterLink>
                            <CDBFooterLink href="/">Loop</CDBFooterLink>
                            <CDBFooterLink href="/">Contrast</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                </CDBBox>
                <small className="text-center mt-5">&copy; YourHouse, 2020. All rights reserved.</small>
            </CDBBox>
        </CDBFooter>
    );
};
export default Footer