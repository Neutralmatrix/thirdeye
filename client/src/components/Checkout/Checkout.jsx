import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/context";
import axios from "axios";
import "./Checkout.scss";

const Checkout = () => {
    const navigate = useNavigate();
    const { cartItems, cartSubtotal, setCartItems } = useContext(Context);
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
        phone: "",
        pincode: ""
    });
    const [formErrors, setFormErrors] = useState({
        name: false,
        address: false,
        email: false,
        phone: false,
        pincode: false
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setFormErrors({ ...formErrors, [e.target.name]: false });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(formData.phone)) {
            setFormErrors({ ...formErrors, phone: true });
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            setFormErrors({ ...formErrors, email: true });
            return;
        }

        for (const field in formData) {
            if (formData[field] === "") {
                setFormErrors({ ...formErrors, [field]: true });
                return;
            }
        }

        try {
            const orderData = {
                name: formData.name,
                address: formData.address,
                email: formData.email,
                phone: formData.phone,
                pincode: formData.pincode,
                totalAmount: cartSubtotal,
                products: cartItems.map(item => ({
                    productId: item.id,
                    quantity: item.attributes.quantity,
                    price: item.attributes.price
                }))
            };

            const response = await axios.post(
                `${process.env.REACT_APP_DEV_URL}/orders`,
                orderData
            );

            if (response.status === 200 || response.status === 201) {
                setCartItems([]);
                navigate("/payment");
            } else {
                console.error("Failed to submit order:", response.data);
            }
        } catch (error) {
            console.error("Error submitting order:", error);
        }
    };

    return (
        <div className="checkout-page">
            <div className="checkout-form">
                <h2>Checkout</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={formErrors.name ? "error" : ""}
                        />
                        {formErrors.name && <p className="error-text">Name is required.</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className={formErrors.address ? "error" : ""}
                        />
                        {formErrors.address && <p className="error-text">Address is required.</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={formErrors.email ? "error" : ""}
                        />
                        {formErrors.email && <p className="error-text">Enter a valid email address.</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className={formErrors.phone ? "error" : ""}
                        />
                        {formErrors.phone && <p className="error-text">Enter a valid 10-digit phone number.</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="pincode">Pincode</label>
                        <input
                            type="text"
                            id="pincode"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            required
                            className={formErrors.pincode ? "error" : ""}
                        />
                        {formErrors.pincode && <p className="error-text">Pincode is required.</p>}
                    </div>
                    <div className="form-group">
                        <button type="submit" disabled={cartItems.length === 0}>
                            Proceed to Payment
                        </button>
                    </div>
                </form>
            </div>
            <div className="order-summary">
                <h2>Order Summary</h2>
                <div className="products-list">
                    {cartItems.length > 0 ? (
                        cartItems.map(item => (
                            <div key={item.id} className="product-item">
                                <span>{item.attributes.title}</span>
                                <span>Quantity: {item.attributes.quantity}</span>
                                <span>Price: &#8377;{item.attributes.price}</span>
                            </div>
                        ))
                    ) : (
                        <div className="empty-cart">
                            <span>No items in the cart.</span>
                        </div>
                    )}
                </div>
                {cartItems.length > 0 && (
                    <div className="subtotal">
                        <span>Subtotal:</span>
                        <span>&#8377;{cartSubtotal}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Checkout;
