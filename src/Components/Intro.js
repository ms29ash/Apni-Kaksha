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
                <Button href="https://www.youtube.com/watch?v=aDH1cy51Oc0" target="_blank">Take a tour<Icon /></Button>
            </Details>
            <Wrapper data-aos="fade-down-left">
                <Img src="/images/IntroSection.svg" alt="" />
            </Wrapper>
        </Container>
    )
}

export default Intro

const Container = tw.div`flex items-center max-w-screen   justify-center h-[80vh]`
const Details = tw.div` flex-1 h-screen w-[100%] flex justify-center items-start flex-col p-6`
const Head = tw.h1`text-6xl whitespace-normal	font-semibold`
const Button = tw.a` cursor-pointer flex items-center border-payment-purple border-2 rounded-md px-5 text-payment-purple text-lg my-4 py-4 hover:underline transition-all hover:scale-105 mt-16`
const Icon = tw(BsPlayCircle)`ml-2 text-xl`
const Wrapper = tw.div`h-full`
const Img = tw.img`h-full p-4`