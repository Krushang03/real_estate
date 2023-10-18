import React from 'react'
import '../Style/footer.css'
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import logo from '../images/logo.png'

const Footer = () => {
    return (
        <div>
            <>
                <footer>
                    <div className="footer-area pt-5">
                        <div className="container">
                            <div className="d-flex justify-content-between row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-footer-caption mb-5">
                                        <div className="footer-logo mb-2">
                                            <img src={logo} className='logo-footer' />
                                        </div>
                                        <div className="footer-title mb-5">
                                            <p style={{ color: "#C2C5DB" }}>Subscribe our newsletter to get updates about our services</p>
                                        </div>
                                        <div className="footer-form mt-4">
                                            <div>
                                                <form>
                                                    <input type="email" name="EMAIL" id="" placeholder="Your email address" />
                                                    <div className="form-icon">
                                                        <button type="submit" name="submit" id="newsletter-submit" className="email_icon"> Subscribe </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="footer-social mt-5">
                                            <a href="#"><AiOutlineTwitter className='footer-icon' /></a>
                                            <a href="#"><FaFacebookF className='footer-icon' /></a>
                                            <a href="#"><FaPinterestP className='footer-icon' /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-5">
                                    <div className="footer-tittle">
                                        <h4>Company</h4>
                                        <ul>
                                            <li><a href="#">Why choose us</a></li>
                                            <li><a href="#">Review</a></li>
                                            <li><a href="#">Customers</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Carrier</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-5">
                                    <div className="footer-tittle">
                                        <h4>Products</h4>
                                        <ul className="">
                                            <li><a href="#">Why choose us</a></li>
                                            <li><a href="#">Review</a></li>
                                            <li><a href="#">Customers</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Carrier</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-5">
                                    <div className="footer-tittle">
                                        <h4>Support</h4>
                                        <ul>
                                            <li><a href="#">Technology</a></li>
                                            <li><a href="#">Products</a></li>
                                            <li><a href="#">Customers</a></li>
                                            <li><a href="#">Quality</a></li>
                                            <li><a href="#">Sales geography</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        </div>
    )
}

export default Footer