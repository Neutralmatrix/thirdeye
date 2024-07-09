import { Link } from "react-router-dom";
import BannerImg from "../../../assets/banner-img.png";
import React from "react";
import "./Banner.scss";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Welcome to ThirdEye!</h1>
                    <p> Get your hands on amazing hand embroidered accessories and apparels.
                    </p>
                    <div className="ctas">
                        <Link to="/about" className="banner-cta">About Us</Link>
                        <Link to="/contact" className="banner-cta v2">Contact Us</Link>
                    </div>
                </div>
                <img src={BannerImg} alt="Banner" className="banner-image" />
            </div>
        </div>
    );
};

export default Banner;
