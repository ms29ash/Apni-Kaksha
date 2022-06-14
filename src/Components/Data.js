import React from 'react'
import tw from 'tailwind-styled-components'
import DataSection from './DataSection'

function Data() {
    return (
        <Section>
            <Container>

                <DataSection subscriber={[7, 7, 8, 6, 7, 0, 0]} />
                <DataSection subscriber={[6, 8, 6, 5, 3, 9, 8, 7, 4]} />
            </Container>
        </Section>
    )
}

export default Data

const Section = tw.section`h-[70vh] max-h-[300px]`
const Container = tw.div`flex items-center justify-center`