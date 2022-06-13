import React from 'react'
import tw from 'tailwind-styled-components'
import ChannelCard from './ChannelCard'

function Channels() {
    return (

        <Container>
            <Head>Our Channels</Head>
            <Wrapper>

                <ChannelCard />
                <ChannelCard />
                <ChannelCard />
                <ChannelCard />
                <ChannelCard />
                <ChannelCard />
            </Wrapper>

        </Container>
    )
}

export default Channels

const Container = tw.section`bg-blue-light`
const Head = tw.h1` text-center text-5xl font-semibold py-12`
const Wrapper = tw.section`flex flex-wrap  items-center justify-center `
