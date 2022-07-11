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

const Container = tw.section`  gradient xl:h-screen h-[80vh] grid place-items-center`
const Wrapper = tw.div`lg:max-w-[900px] max-w-[500px] w-full h-full lg:max-h-[500px] max-h-[300px] text-center quote bg-white xl:text-5xl text-3xl items-center justify-center flex relative	`
const Img = tw.img`absolute top-0 left-0 w-[100px]`
const Head = tw.h1`  text-center`
