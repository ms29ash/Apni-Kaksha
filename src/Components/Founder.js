import React, { useRef } from 'react'
import tw from 'tailwind-styled-components'
import { BsPlayCircle } from "react-icons/bs";

function Founder() {
    const ref = useRef();
    return (
        <Section ref={ref} onWheel={() => { console.log(ref.current.scrollTop) }}>


            <Container>
                <Img src="https://www.apnikaksha.net/static/media/Aman.dd1c4af0.jpg" alt="" />
                <Details>
                    <Head>Aman Dhattarwal</Head>
                    <Text>
                        Finances should not be the barrier to premium education for any student. Our mission is not only to create Job seekers but also to produce Job Creators. To achieve this we first need to provide all students with the best quality education irrespective of their economic background.
                    </Text>
                    <Button>
                        Know more about me<Icon /></Button>

                    <Scroll   >hello</Scroll>
                </Details>
            </Container>
        </Section>
    )
}

export default Founder

const Section = tw.div`bg-purple-blue-light p-32 `
const Container = tw.div`flex items-center`

const Img = tw.img`w-7/12`
const Details = tw.div`px-12`

const Head = tw.h1`font-semibold text-4xl my-3`
const Text = tw.p``
const Button = tw.button`text-payment-purple border-payment-purple border-2 py-4 px-2 rounded-xl flex items-center mt-6 hover:underline transition-transform hover:scale-105	`

const Icon = tw(BsPlayCircle)`text-payment-purple text-xl ml-3 `

const Scroll = tw.div``