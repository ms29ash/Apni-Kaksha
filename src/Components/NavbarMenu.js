import React, { useState } from 'react'
import tw from 'tailwind-styled-components'
import { FaAndroid } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react'


export default function NavbarMenu(props) {

    const { isOpen, setOpen } = props
    const toggle = () => {
        setOpen(!isOpen)

    }
    return (


        <Container>
            <HamburgerIcon toggled={isOpen} toggle={setOpen} />
            <Options>
                <Ul ><Text>Let's Study</Text> <Arrow />
                    <Dropdown >
                        <Bubble></Bubble>
                        <Li >Coding

                            <SubDropdown >
                                <LinkTo onClick={toggle} to="/course/0">Web Development</LinkTo>
                                <LinkTo onClick={toggle} to="/course/1">Java Placement course</LinkTo>
                            </SubDropdown>
                        </Li>
                        <Li >JEE Mains
                            <SubDropdown >
                                <LinkTo onClick={toggle} to="/course/2">Maths</LinkTo>

                            </SubDropdown>
                        </Li>
                        <Li >Boards
                            <SubDropdown >
                                <Li>XII</Li>

                            </SubDropdown>
                        </Li>
                        <Li>Neet
                            <SubDropdown >
                                <LinkTo onClick={toggle} to='/course/1'>Inorganic Chemistry</LinkTo>

                            </SubDropdown></Li>

                    </Dropdown>

                </Ul>
                <Ul ><Text> Student Tool</Text><Arrow />
                    <Dropdown>
                        <Bubble></Bubble>
                        <Li>Periodic Table</Li>


                    </Dropdown></Ul>
                <Ul><Text> Our Channels</Text></Ul>
            </Options>
            <Icons>
                <Icon>Login</Icon>
            </Icons>
        </Container>


    )
}




const Container = tw.div`  flex flex-col  flex-1 h-screen w-screen fixed bottom-0 right-0 left-0 top-0 bg-white p-5 z-50`
const Options = tw.div` flex  flex-col flex-wrap ml-4 my-16 `
const Ul = tw.ul`px-6 flex items-center cursor-pointer py-5 option relative dropdown`
const Text = tw.p`text-black/80 text-3xl `
const Arrow = tw(AiOutlineDown)`ml-2 transition-transform arrow`
const Icons = tw.div`flex  items-center justify-center w-full`
const Icon = tw.a`text-xl px-12 py-5 mx-2 bg-payment-purple rounded-full text-white cursor-pointer`

const Dropdown = tw.div`hidden absolute top-14 left-[12%] drop-shadow-xl  bg-white md:w-56 w-40 rounded md:absolute dropdown-content transition duration-150 ease-in-out origin-top lg:min-w-32 filter md:drop-shadow md:text-center text-sm  z-10 shadow-lg `
const SubDropdown = tw(Dropdown)` text-black  left-full top-0 absolute drop-down-content`
const Bubble = tw.div`bubble `
const Li = tw.div`px-4 py-3 my-2 hover:bg-payment-purple hover:text-white relative drop-down`
const LinkTo = tw(Link)` block px-4 py-3 my-2 hover:bg-payment-purple hover:text-white relative drop-down `

const HamburgerIcon = tw(Hamburger)` xl:hidden block `