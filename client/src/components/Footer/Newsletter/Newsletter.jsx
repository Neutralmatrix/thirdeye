import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaWhatsapp,
    FaInstagram,
    FaLinkedinIn,
    FaEnvelope,
} from "react-icons/fa";
import axios from "axios";
import "./Newsletter.scss";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [subscriptionStatus, setSubscriptionStatus] = useState(null);

    const handleSubscribe = async () => {
        try {
            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            const response = await axios.post(
                `${process.env.REACT_APP_DEV_URL}/subscriber`,
                { email }
            );

            if (response.status === 200) {
                setSubscriptionStatus("success");
                setEmail("");
            } else {
                setSubscriptionStatus("error");
            }
        } catch (error) {
            console.error("Subscription failed:", error);
            setSubscriptionStatus("error");
        }
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSubscribe();
        }
    };

    const renderSubscriptionStatus = () => {
        if (subscriptionStatus === "success") {
            return (
                <div className="subscription-success">
                    You have successfully subscribed!
                </div>
            );
        } else if (subscriptionStatus === "error") {
            return (
                <div className="subscription-error">
                    Subscription failed. Please try again later.
                </div>
            );
        } else {
            return null;
        }
    };

    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers.
                </span>
                <div className="form">
                    <input
                        type="text"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button onClick={handleSubscribe}>Subscribe</button>
                </div>
                {renderSubscriptionStatus()}
                <div className="text">
                    Will be used in accordance with our{" "}
                    <Link to="/privacy-policy">Privacy policy</Link>
                </div>
                <div className="social-icons">
                <a
                        href="https://www.instagram.com/third_eye129?igsh=MWZsYXE4aDk2bTNhaQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon"
                    >
                        <FaInstagram size={14} />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/enloomed-india-private-limited/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon"
                    >
                        <FaLinkedinIn size={14} />
                    </a>
                    <a
                        href="mailto:thirdeye041122@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon"
                    >
                        <FaEnvelope size={14} />
                    </a>
                    <a
                        href="https://wa.me/917982977125"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon"
                    >
                        <FaWhatsapp size={14} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
