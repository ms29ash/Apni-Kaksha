import React from 'react'
import tw from 'tailwind-styled-components'
import { AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

function FooterSocial() {
    return (
        <Container>
            <Icon href='https://www.instagram.com/dhattarwalaman/' target='_blank' >

                <AiOutlineInstagram />
            </Icon>
            <Icon href='https://www.youtube.com/channel/UCmXZxX_qexEZxhb5_vQKPCw' target='_blank' >
                <AiFillYoutube />
            </Icon>
            <Icon href='https://twitter.com/amandhattarwal/' target='_blank' >
                <AiOutlineTwitter />
            </Icon>
            <Icon href='https://www.linkedin.com/in/dhattarwalaman/' target='_blank' >
                <FaLinkedinIn />
            </Icon>
            <Icon href='https://www.facebook.com/dhattarwalaman' target='_blank' >
                <FaFacebook />
            </Icon>


        </Container>
    )
}

export default FooterSocial

const Container = tw.div`flex p-6`
const Icon = tw.a` block text-4xl text-white bg-black lg:mx-5 mx-2 p-2 rounded-full cursor-pointer`