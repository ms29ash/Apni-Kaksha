import React from 'react'
import tw from 'tailwind-styled-components'
import FooterOption from './FooterOption'

function FooterOptions() {
    return (
        <Container>
            <FooterOption />
            <FooterOption />
            <FooterOption />
        </Container>
    )
}

export default FooterOptions

const Container = tw.div`flex w-8/12`
