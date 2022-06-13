import React from 'react'
import tw from 'tailwind-styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';

function ChannelCard() {
    AOS.init({});
    return (
        <Container data-aos="zoom-in">
            <Img src="https://yt3.ggpht.com/dc49OETH4DW-1PYe1MLjHCI9bWcXX6KnLmGiLwNQR7-vqRIUTndJCmVyTTHTg4thRFNXvoxp" alt="" />
            <Wrapper>
                <Head>Aman Dhattarwal</Head>
                <SubHead>
                    <Text>4.0M Subscriber</Text>
                    <Button>Visit</Button>
                </SubHead>
            </Wrapper>
            <Tag>Main Channel</Tag>

        </Container>
    )
}

export default ChannelCard

const Container = tw.div`h-full bg-white px-6 py-3 rounded-xl mx-20 my-10`

const Img = tw.img`h-[60%] object-cover`
const Wrapper = tw.div`p-4`
const Head = tw.h1`text-4xl font-semibold`
const SubHead = tw.div`flex items-center justify-between `
const Text = tw.p``
const Button = tw.button` border-payment-purple border-2 px-4 py-2 rounded-lg text-payment-purple hover:underline`
const Tag = tw.span` bg-payment-purple text-white px-6 py-3 rounded-tr-lg rounded-bl-lg absolute top-0 right-0`