import React from 'react'
import tw from 'tailwind-styled-components'
import { FaAndroid } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";

function Navbar() {
    return (
        <Header>
            <Img src="https://www.apnikaksha.net/static/media/Logo.40905f46.jpeg" alt="" />
            <Container>
                <Options>
                    <Ul><p>Let's Study</p> <Arrow /></Ul>
                    <Ul><p> Student Tool</p><Arrow /></Ul>
                    <Ul><p> Our Channels</p><Arrow /></Ul>
                </Options>
                <Icons>
                    <Icon>

                        <Android />
                    </Icon>
                    <Icon>Login</Icon>
                </Icons>
            </Container>
        </Header>
    )
}

export default Navbar

const Header = tw.header`flex justify-center px-32 py-2 w-full  items-center border-payment-purple/20 border-b-[0.5px]`
const Container = tw.div`  flex items-center justify-between flex-1`
const Img = tw.img`w-16 h-16 object-cover mr-10`
const Options = tw.div` flex justify-center items-center flex-wrap ml-4 flex-1`
const Ul = tw.ul`px-6 flex items-center cursor-pointer py-2`
const Arrow = tw(AiOutlineDown)`ml-2`
const Icons = tw.div`flex  items-center`
const Icon = tw.div`text-lg px-6 py-3 mx-2 bg-payment-purple rounded-full text-white cursor-pointer`
const Android = tw(FaAndroid)`text-[30px] `
