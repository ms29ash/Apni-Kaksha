import React from 'react'
import tw from 'tailwind-styled-components'
import FooterOptions from './FooterOptions'
import FooterSocial from './FooterSocial'

function FooterMain() {
    return (
        <Main>
            <Container>
                <Wrapper>

                    <Img src="https://www.apnikaksha.net/static/media/Logo.40905f46.jpeg" alt="" />
                    <FooterOptions />
                </Wrapper>
                <FooterSocial />
            </Container>
        </Main>
    )
}

export default FooterMain

const Main = tw.div`bg-footer-blue px-16 pt-20 pb-6 w-full`
const Container = tw.div`flex flex-col w-full items-center `
const Img = tw.img`w-[200px] cursor-pointer `
const Wrapper = tw.div`flex items-center w-full justify-between pl-5`