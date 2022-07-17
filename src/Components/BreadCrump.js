import React from 'react'
import tw from 'tailwind-styled-components'
import { AiOutlineRight } from "react-icons/ai";

function BreadCrump() {
    return (
        <Container>
            <Wrapper>Let's Study</Wrapper>
            <Icon />
            <Wrapper>Coding</Wrapper>
            <Icon />
            <Wrapper>Web Development</Wrapper>
            <Icon />
        </Container>
    )
}

export default BreadCrump

const Container = tw.div`flex items-center pb-8 `
const Wrapper = tw.div`text-xl mr-6`
const Icon = tw(AiOutlineRight)`mr-6 text-3xl font-bold` 