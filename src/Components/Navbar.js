import React, { useState } from 'react'
import tw from 'tailwind-styled-components'
import { FaAndroid } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react'
import NavbarMenu from './NavbarMenu'


function Navbar() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Header>
                <Logo to='/' >

                    <Img src="https://www.apnikaksha.net/static/media/Logo.40905f46.jpeg" alt="" />
                </Logo>
                <Container>
                    <Options>
                        <Ul ><Text>Let's Study</Text> <Arrow />
                            <Dropdown >
                                <Bubble></Bubble>
                                <Li >Coding

                                    <SubDropdown >
                                        <LinkTo to="/course/0">Web Development</LinkTo>
                                        <LinkTo to="/course/1">Java Placement course</LinkTo>
                                    </SubDropdown>
                                </Li>
                                <Li >JEE Mains
                                    <SubDropdown >
                                        <LinkTo to="/course/2">Maths</LinkTo>

                                    </SubDropdown>
                                </Li>
                                <Li >Boards
                                    <SubDropdown >
                                        <LinkTo to='/course/3'>XII</LinkTo>

                                    </SubDropdown>
                                </Li>
                                <Li>Neet
                                    <SubDropdown >
                                        <LinkTo to='/course/4'>Inorganic Chemistry</LinkTo>

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
                        <Icon href="https://play.google.com/store/apps/details?id=com.apni.kaksha" target="_blank">

                            <Android />
                        </Icon>
                        <Icon>Login</Icon>
                    </Icons>
                </Container>
                <HamburgerIcon isOpen={isOpen} toggled={isOpen} toggle={setOpen} />
            </Header>
            {isOpen &&
                <NavbarMenu isOpen={isOpen} setOpen={setOpen} />
            }
        </>
    )
}

export default Navbar

const Header = tw.header`flex xl:justify-center px-8 xl:px-40 py-2 w-full  items-center border-payment-purple/20 border-b-[0.5px] justify-between`
const Container = tw.div`  hidden xl:flex items-center justify-between flex-1`
const Logo = tw(Link)`w-20 h-20 mr-10`
const Img = tw.img`w-full h-full object-cover `
const Options = tw.div` flex  justify-center items-center flex-wrap ml-4 flex-1`
const Ul = tw.ul`px-6 flex items-center cursor-pointer py-5 option relative dropdown`
const Text = tw.p`text-black/80`
const Arrow = tw(AiOutlineDown)`ml-2 transition-transform arrow`
const Icons = tw.div`flex  items-center`
const Icon = tw.a`text-lg px-6 py-3 mx-2 bg-payment-purple rounded-full text-white cursor-pointer`
const Android = tw(FaAndroid)`text-[30px] `

const Dropdown = tw.div`hidden absolute top-14 left-[12%] drop-shadow-xl  bg-white md:w-56 w-40 rounded md:absolute dropdown-content transition duration-150 ease-in-out origin-top lg:min-w-32 filter md:drop-shadow md:text-center text-sm  z-10 shadow-lg `
const SubDropdown = tw(Dropdown)` text-black  left-full top-0 absolute drop-down-content`
const Bubble = tw.div`bubble`
const Li = tw.div`px-4 py-3 my-2 hover:bg-payment-purple hover:text-white relative drop-down`
const LinkTo = tw(Link)` block px-4 py-3 my-2 hover:bg-yellow-400  relative drop-down `

const HamburgerIcon = tw(Hamburger)`${p => p.isOpen ? 'fixed' : 'static'} xl:hidden block left-0 top-0 z-50`