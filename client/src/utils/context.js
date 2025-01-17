import { useEffect, useState, createContext } from "react";
import { useLocation } from "react-router-dom";
import { fetchDataFromApi } from "./api";
export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState({ data: [] });
    const [products, setProducts] = useState({ data: [] });
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubtotal, setCartSubtotal] = useState(0);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        let count = 0;
        cartItems.map((item) => (count += item.attributes.quantity));
        setCartCount(count);

        let subTotal = 0;
        cartItems.map(item => subTotal += item.attributes.price * item.attributes.quantity);
        setCartSubtotal(subTotal);
    }, [cartItems]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetchDataFromApi('/categories');
                setCategories(res);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems];
        let index = items.findIndex((p) => p.id === product.id);
        if(index !== -1) {
            items[index].attributes.quantity += quantity;
        } else {
            product.attributes.quantity = quantity;
            items = [...items, product];
        }
        setCartItems(items);
    };

    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items.filter(p => p.id !== product.id);
        setCartItems(items);
    };

    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items.findIndex((p) => p.id === product.id);
        if(type === "inc") {
            items[index].attributes.quantity += 1;
        } else if (type === "dec") {
            if(items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        setCartItems(items);
    };

    return (
        <Context.Provider 
            value={{
                categories,
                setCategories,
                products,
                setProducts,
                cartItems,
                setCartItems,
                cartCount,
                setCartCount,
                cartSubtotal,
                setCartSubtotal,
                handleAddToCart,
                handleRemoveFromCart,
                handleCartProductQuantity
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;
