import React from 'react'
import Intro from './Intro'
import Navbar from './Navbar'
import Course from './Course'
import Founder from './Founder'
import Quote from './Quote'
import Channels from './Channels'
import About from './About'
import Data from './Data'
import Footer from './Footer'
import Social from './Social'


function Home() {
    return (
        <>
            <Navbar />
            <Social />
            <Intro />
            <Course />
            <Founder />
            <Quote />
            <Channels />
            <About />
            <Data />
            <Footer />
            {/* <Course /> */}
        </>
    )
}

export default Home
