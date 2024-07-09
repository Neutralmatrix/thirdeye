import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy/PrivacyPolicy";
import ReturnPolicy from "./components/Pages/ReturnPolicy/ReturnPolicy";
import TermsAndCond from "./components/Pages/TermsAndCond/TermsAndCond";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Checkout from "./components/Checkout/Checkout";

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/return-policy" element={<ReturnPolicy />} />
                    <Route path="/terms-and-conditions" element={<TermsAndCond />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/checkout" element={<Checkout />} /> 
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;