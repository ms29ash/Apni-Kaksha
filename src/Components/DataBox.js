import React from 'react'
import tw from 'tailwind-styled-components'

function DataBox(props) {
    return (
        <Box>
            {props.num}
        </Box>
    )
}

export default DataBox

const Box = tw.div`bg-gray-100 rounded-xl mx-1 p-4 text-3xl `
