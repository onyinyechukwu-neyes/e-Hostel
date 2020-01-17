import React from "react";
import HeadSection from "./HeadSection";
import About from "./About";
import Features from "./Features";
import Contact from "./Contact";
import Footer from "./Footer";


const HomePage = props =>{
    return(
        <div>
            <HeadSection prop={props}/>
            <About/>
            <Features/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default HomePage;