import React from 'react'
import tw from 'tailwind-styled-components'
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Social() {
    AOS.init();

    return (
        <Container data-aos="fade-right" data-aos-delay="350">
            <Icon>

                <AiOutlineInstagram />
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

export default Social

const Container = tw.div`xl:flex hidden  fixed bg-cream rounded-2xl rounded-l-none px-2 left-0  flex-col h-[30vh] mt-[20vh] items-center justify-between`
const Icon = tw.div`text-xl text-white bg-black my-2  p-2 rounded-full transition-all hover:scale-125 cursor-pointer`