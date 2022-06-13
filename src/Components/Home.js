import React from 'react'
import Intro from './Intro'
import Navbar from './Navbar'
import Course from './Course'
import About from './About'
import Quote from './Quote'


function Home() {
    return (
        <>
            <Navbar />
            <Intro />
            <Course />
            <About />
            <Quote />
            {/* <Course /> */}
        </>
    )
}

export default Home
