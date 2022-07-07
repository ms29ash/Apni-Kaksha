import React from 'react'
import tw from 'tailwind-styled-components'

function About() {
    return (
        <Section>
            <Container>
                <Wrapper>
                    <Head>Download the Apni Kaksha App from Playstore.
                    </Head>
                    <SubHead>The all-new Apni Kaksha Application is here! The one-stop solution for all your learning needs. Forget about Netflix and binge watch all our premium lectures, right there on your phone screens. From Physics, Chemistry and Maths, to English and SST, we've got you covered.

                    </SubHead>
                </Wrapper>
                <Box>

                    <Img src="./images/iPhone.46b7bee3.png" alt="" />
                </Box>
            </Container>

        </Section>
    )
}

export default About

const Section = tw.section`bg-white min-h-screen py-32`
const Container = tw.div`bg-cream flex flex-col xl:flex-row rounded-xl  xl:p-24 p-16 justify-center`
const Wrapper = tw.div`xl:mx-12 items-baseline px-10 xl:w-6/12 w-full`
const Box = tw.div`xl:w-6/12 w-full`
const Head = tw.h1`text-4xl font-semibold leading-8`
const SubHead = tw.p`text-2xl text-black/80 mt-6`
const Img = tw.img`xl:w-8/12 object-cover w-full`
