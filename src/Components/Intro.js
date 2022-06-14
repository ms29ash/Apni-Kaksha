import React from 'react'
import tw from 'tailwind-styled-components'
import { BsPlayCircle } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Intro() {
    AOS.init({});
    return (
        <Container id="a">
            <Details data-aos="fade-down-right">
                <Head>Premium <br /> Education for All</Head>
                <Button>Take a tour<Icon /></Button>
            </Details>
            <Wrapper data-aos="fade-down-left">
                <Img src="/images/IntroSection.svg" alt="" />
            </Wrapper>
        </Container>
    )
}

export default Intro

const Container = tw.div`flex items-center w-screen px-32 justify-center h-screen`
const Details = tw.div`h-screen w-[50%] flex justify-center items-start flex-col p-6`
const Head = tw.h1`text-6xl whitespace-normal	font-semibold`
const Button = tw.button` flex items-center border-payment-purple border-2 rounded-md px-5 text-payment-purple text-lg my-4 py-4 hover:underline transition-all hover:scale-105 mt-16`
const Icon = tw(BsPlayCircle)`ml-2 text-xl`
const Wrapper = tw.div``
const Img = tw.img`h-screen p-4`