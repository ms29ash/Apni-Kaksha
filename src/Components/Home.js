import React from 'react'
import Intro from './Intro'
import Navbar from './Navbar'
import Course from './Course'
import About from './About'


function Home() {
    return (
        <>
            <Navbar />
            <Intro />
            <Course />
            <About />
        </>
    )
}

export default Home
