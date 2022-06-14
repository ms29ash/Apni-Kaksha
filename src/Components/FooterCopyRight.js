import React from 'react'
import tw from 'tailwind-styled-components'

function FooterCopyRight() {
    return (
        <Container>
            <Text>© 2021 VidyaSantosh Pvt. Ltd. All rights reserved</Text>
        </Container>
    )
}

export default FooterCopyRight

const Container = tw.div`bg-black-footer flex items-center justify-center py-8`
const Text = tw.p`text-white`