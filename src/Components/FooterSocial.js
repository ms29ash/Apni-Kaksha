import React from 'react'
import tw from 'tailwind-styled-components'
import { AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

function FooterSocial() {
    return (
        <Container>
            <Icon>

                <AiOutlineInstagram />
            </Icon>
            <Icon>
                <AiFillYoutube />
            </Icon>
            <Icon>
                <AiOutlineTwitter />
            </Icon>
            <Icon>
                <FaLinkedinIn />
            </Icon>
            <Icon>
                <FaFacebook />
            </Icon>


        </Container>
    )
}

export default FooterSocial

const Container = tw.div`flex p-6`
const Icon = tw.div`text-4xl text-white bg-black mx-5 p-2 rounded-full cursor-pointer`