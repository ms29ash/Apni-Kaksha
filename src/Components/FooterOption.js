import React from 'react'
import tw from 'tailwind-styled-components'

function FooterOption() {
    return (
        <Container>
            <Head>Our Channels
            </Head>
            <Wrapper>

                {
                    ['Privacy Policy',
                        'Refund & Cancellation Policy',
                        'Terms and conditions'
                    ].map((item) => {
                        return <Li>{item}</Li>
                    }
                    )
                }
            </Wrapper>

        </Container>
    )
}

export default FooterOption

const Container = tw.div`flex flex-col items-start justify-start w-full text-white mx-6`
const Head = tw.h1`text-xl text-left`
const Wrapper = tw.div`mt-8`
const Li = tw.li`my-2 list-none`

