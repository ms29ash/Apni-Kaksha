import React from 'react'
import FooterCopyRight from './FooterCopyRight'
import FooterMain from './FooterMain'
import tw from 'tailwind-styled-components'

function Footer() {
    return (
        <Container>
            <FooterMain />
            <FooterCopyRight />
        </Container>
    )
}

export default Footer

const Container = tw.div`w-screen`