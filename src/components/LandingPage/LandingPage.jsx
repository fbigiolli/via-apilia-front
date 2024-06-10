import React from "react";

import './LandingPage.css'
import NavbarApilia from "./Navbar/NavbarApilia";
import MainBody from "./MainBody/MainBody";
import CustomerQuoteSection from "./CustomerQuoteSection/CustomerQuoteSection"
import Footer from "./Footer/Footer"

function LandingPage() {
    return (
        <div className="main-body">
            <NavbarApilia />
            <MainBody/>
            <CustomerQuoteSection/>
            <Footer/>
        </div>
    );
}

export default LandingPage;
