import React from 'react'
import tw from 'tailwind-styled-components'
import DataBox from './DataBox'

function DataSection() {
    return (
        <Container>
            <Head>Total Subscribers</Head>
            <Wrapper>
                <DataBox />
                <DataBox />
                <DataBox />
                <DataBox />
                <DataBox />
                <DataBox />
                <DataBox />
            </Wrapper>
        </Container>
    )
}

export default DataSection

const Container = tw.div`mx-16 flex flex-col items-center`
const Head = tw.h1`text-3xl`
const Wrapper = tw.div`flex my-6`
