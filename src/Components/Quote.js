import React from 'react'
import tw from 'tailwind-styled-components'

import AOS from 'aos';
import 'aos/dist/aos.css';
function Quote() {
    AOS.init({});
    return (
        <Container >
            <Wrapper data-aos-once="true" data-aos="zoom-in-up">
                <Img src="https://www.apnikaksha.net/static/media/quotes-ico.4138a330.svg" alt="" />

                <Head>

                    Hustlers Never Make Excuses
                </Head>
            </Wrapper>


        </Container>
    )
}

export default Quote

const Container = tw.section`  gradient h-screen grid place-items-center`
const Wrapper = tw.div` max-w-[900px] w-full h-full max-h-[500px] text-center quote bg-white text-5xl items-center justify-center flex relative	`
const Img = tw.img`absolute top-0 left-0`
const Head = tw.h1`  text-center`
