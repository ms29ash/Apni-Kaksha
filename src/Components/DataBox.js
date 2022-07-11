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

const Box = tw.div`bg-gray-100 rounded-xl mx-1 xl:p-4 p-2 lg:text-3xl text-xl`
