import React from 'react'
import tw from 'tailwind-styled-components'
import DataSection from './DataSection'

function Data() {
    return (
        <Section>
            <Container>

                <DataSection />
                <DataSection />
            </Container>
        </Section>
    )
}

export default Data

const Section = tw.section`h-[70vh] max-h-[300px]`
const Container = tw.div`flex items-center justify-center`