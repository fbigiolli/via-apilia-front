import React from "react";

import './LandingPage.css'
import NavbarApilia from "./Navbar/NavbarApilia";
import MainBody from "./MainBody/MainBody";
import CustomerQuoteSection from "./CustomerQuoteSection/CustomerQuoteSection"
import Footer from "./Footer/Footer"
import GoogleMapSection from "./GoogleMapSection/GoogleMapSection";

function LandingPage() {
    return (
        <div className="main-body">
            <div className="overlay"></div>
            <NavbarApilia />
            <MainBody />
            <CustomerQuoteSection />
            <GoogleMapSection/>
            <Footer />
        </div>
    );
}
export default LandingPage;
