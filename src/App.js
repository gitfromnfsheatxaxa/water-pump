import React from "react";
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import ScrollToTop from "./pages/ScrolltoTop/ScrollToTop";
import NavbarCom from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Card from "./pages/Card/Card";
import Products from "./pages/Products/Products";
import FileInfo from "./fileInfo";
import Loading from "./pages/loading page/Loading";
import ProductSearchPage from "./pages/ProductSearch/ProductSearchPage";
import TelCardCom from "./components/TelCardCom/TelCardCom";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <NavbarStyle>
            <ScrollToTop />
            <NavbarCom />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/card" element={<Card />} />
                <Route path="/products" element={<Products />} />
                <Route path="/:id" element={<FileInfo />} />
                <Route path="/loading" element={<Loading />} />
                <Route path="/search" element={<ProductSearchPage />} />
            </Routes>
            <TelCardCom />
            <Footer />
        </NavbarStyle>
    );
}

const NavbarStyle = styled.div`
`;

export default App;
