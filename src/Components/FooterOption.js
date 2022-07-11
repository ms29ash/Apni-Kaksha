import React from 'react'
import tw from 'tailwind-styled-components'

function FooterOption(props) {
    const { title, options } = props.items || {};
    return (
        <Container>
            <Head>{title}</Head>
            <Wrapper>

                {
                    options.map((item) => {
                        return <Li>{item}</Li>
                    }
                    )
                }
            </Wrapper>

        </Container>
    )
}

export default FooterOption

const Container = tw.div`flex flex-col items-start justify-start w-full text-white lg:mx-6 mx-2 mt-6  my-4 xl:my-0`
const Head = tw.h1`text-xl text-left`
const Wrapper = tw.div`mt-8`
const Li = tw.li`my-2 list-none cursor-pointer`

