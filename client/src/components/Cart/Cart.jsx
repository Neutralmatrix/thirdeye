import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../../utils/context";
import CartItem from "./CartItem/CartItem";
import "./Cart.scss";

const Cart = ({ setShowCart }) => {
    const { cartItems, cartSubtotal } = useContext(Context);

    const handleCloseCart = () => {
        if (!cartItems.length) {
            setShowCart(false);
        }
    };

    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={() => setShowCart(false)}>
                        <MdClose />
                        <span className="text">close</span>
                    </span>
                </div>

                {!cartItems?.length && (
                    <div className="empty-cart">
                        <BsCartX />
                        <span>No products in the cart.</span>
                        <button className="return-cta" onClick={handleCloseCart}>
                            Return To Shop
                        </button>
                    </div>
                )}

                {!!cartItems?.length && (
                    <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <div className="text">Subtotal:</div>
                                <div className="text total">&#8377;{cartSubtotal}</div>
                            </div>
                            <div className="button">
                                <button className="checkout-cta">Checkout</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
