import React, { useContext } from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../../utils/context";
import Payment from "../../assets/payments.png";
import "./Footer.scss";

const Footer = () => {
    const { categories } = useContext(Context);

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        ThirdEye is a government-recognized startup based in Kanpur, Uttar Pradesh, dedicated to promoting women's employment and empowerment. We specialize in hand-embroidered products with an Indo-International touch, crafted by skilled artisans from rural areas. Our vision is to create sustainable employment opportunities while leading the apparel industry into the future.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Enloomed India Private Limited
                            C-1622, Gaur Siddhartham
                            Ghaziabad, Uttar Pradesh,
                            India (201009)
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            Phone: +917982977125
                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">
                            Email: thirdeye041122@gmail.com
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    {categories && categories.data && categories.data.length > 0 ? (
                        categories.data.map((category) => (
                            <Link to={`/category/${category.id}`} key={category.id} className="text">
                                {category.attributes.title}
                            </Link>
                        ))
                    ) : (
                        <div className="text">Loading categories...</div>
                    )}
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <Link to="/" className="text">Home</Link>
                    <Link to="/about" className="text">About</Link>
                    <Link to="/privacy-policy" className="text">Privacy Policy</Link>
                    <Link to="/terms-and-conditions" className="text">Terms and Conditions</Link>
                    <Link to="/return-policy" className="text">Return Policy</Link>
                    <Link to="/contact" className="text">Contact Us</Link>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        &copy; {new Date().getFullYear()} THIRD EYE by Enloomed India Private Limited. All rights reserved.
                    </div>
                    <img src={Payment} alt=""/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
