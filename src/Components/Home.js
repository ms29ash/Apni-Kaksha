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
import tw from 'tailwind-styled-components'


function Home() {
    return (
        <>
            <Container>
                <Social />
                <Intro />
                <Course />
            </Container>
            <Founder />


            <Quote />
            <Channels />
            <About />
            <Data />
            <Footer />

        </>
    )
}

export default Home

const Container = tw.div`xl:px-32 px-6 max-w-screen  overflow-x-hidden`
