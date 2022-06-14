import React from 'react'
import tw from 'tailwind-styled-components'
import { BsArrowRight } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ChannelCard(props) {
    const { name, img, type, subscriber, link } = props.item || {};
    AOS.init({});
    return (
        <Container data-aos="zoom-in">
            <Img src={`./images/${img}`} alt="" />
            <Wrapper>
                <Head>{name}</Head>
                <SubHead>
                    <Text>{subscriber} Subscriber</Text>
                    <Button href={link} target="_blank">Visit<Icon src="https://www.apnikaksha.net/static/media/ArrowLineUpRightColor.22ef1557.svg" /></Button>
                </SubHead>
            </Wrapper>
            <Tag>{type}</Tag>

        </Container>
    )
}

export default ChannelCard

const Container = tw.div`h-full  bg-white px-6 py-3 rounded-xl mx-20 my-10`

const Img = tw.img`h-[60%] object-cover`
const Wrapper = tw.div`p-4`
const Head = tw.h1`text-4xl font-semibold`
const SubHead = tw.div`flex items-center justify-between `
const Text = tw.p`text-black/60`
const Button = tw.a`cursor-pointer border-payment-purple border-2 px-4 py-2 rounded-lg text-payment-purple hover:underline flex items-center hover:scale-105 transition-all`
const Icon = tw.img``
const Tag = tw.span` bg-payment-purple text-white px-6 py-3 rounded-tr-lg rounded-bl-lg absolute top-0 right-0`