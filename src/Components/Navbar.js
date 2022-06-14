import React from 'react'
import tw from 'tailwind-styled-components'
import { FaAndroid } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <Header>
            <Img src="https://www.apnikaksha.net/static/media/Logo.40905f46.jpeg" alt="" />
            <Container>
                <Options>
                    <Ul ><Text>Let's Study</Text> <Arrow />
                        <Dropdown >
                            <Bubble></Bubble>
                            <Li >Coding

                                <SubDropdown >
                                    <Li>Web Development</Li>
                                    <Li>Java Placement Course</Li>
                                </SubDropdown>
                            </Li>
                            <Li >JEE Mains
                                <SubDropdown >
                                    <Li>Maths</Li>

                                </SubDropdown>
                            </Li>
                            <Li >Boards
                                <SubDropdown >
                                    <Li>XII</Li>

                                </SubDropdown>
                            </Li>
                            <Li>Neet
                                <SubDropdown >
                                    <Li>Inorganic Chemistry</Li>

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

const Header = tw.header`flex justify-center px-40 py-2 w-full  items-center border-payment-purple/20 border-b-[0.5px]`
const Container = tw.div`  flex items-center justify-between flex-1`
const Img = tw.img`w-20 h-20 object-cover mr-10`
const Options = tw.div` flex justify-center items-center flex-wrap ml-4 flex-1`
const Ul = tw.ul`px-6 flex items-center cursor-pointer py-5 option relative dropdown`
const Text = tw.p`text-black/80`
const Arrow = tw(AiOutlineDown)`ml-2 transition-transform arrow`
const Icons = tw.div`flex  items-center`
const Icon = tw.div`text-lg px-6 py-3 mx-2 bg-payment-purple rounded-full text-white cursor-pointer`
const Android = tw(FaAndroid)`text-[30px] `

const Dropdown = tw.div`hidden absolute top-14 left-[12%] drop-shadow-xl  bg-white md:w-56 w-40 rounded md:absolute dropdown-content transition duration-150 ease-in-out origin-top lg:min-w-32 filter md:drop-shadow md:text-center text-sm  z-10 shadow-lg `
const SubDropdown = tw(Dropdown)` text-black  left-full top-0 absolute drop-down-content`
const Bubble = tw.div`bubble`
const Li = tw.div`px-4 py-3 my-2 hover:bg-payment-purple hover:text-white relative drop-down`
