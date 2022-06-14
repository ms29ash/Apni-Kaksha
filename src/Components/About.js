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

const Section = tw.section`bg-white min-h-screen p-32`
const Container = tw.div`bg-cream flex rounded-xl  p-24`
const Wrapper = tw.div`mx-12 items-baseline px-10 w-6/12`
const Box = tw.div`w-6/12`
const Head = tw.h1`text-4xl font-semibold leading-8`
const SubHead = tw.p`text-2xl text-black/80 mt-6`
const Img = tw.img`w-8/12 object-cover`
