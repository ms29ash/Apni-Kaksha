import React from 'react'
import tw from 'tailwind-styled-components'
import { Link } from 'react-router-dom'

function FooterOption(props) {
    const { title, options, type } = props.item || {};
    return (
        <Container>
            <Head>{title}</Head>
            <Wrapper>
                {
                    type === 'a' ?
                        options.map((i) => {
                            return <Li href={i.href} target="_blank">{i?.name}</Li>
                        })
                        :
                        (
                            options.map((i) => {
                                return <LinkTo to={i.href} >{i?.name}</LinkTo>
                            })
                        )}



            </Wrapper>

        </Container>
    )
}

export default FooterOption

const Container = tw.div`flex flex-col items-start justify-start w-full text-white lg:mx-6 mx-2 mt-6  my-4 xl:my-0`
const Head = tw.h1`text-xl text-left`
const Wrapper = tw.div`mt-8`
const Li = tw.a`my-2 block cursor-pointer`
const LinkTo = tw(Link)`my-2 block cursor-pointer`

