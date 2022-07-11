import React from 'react'
import tw from "tailwind-styled-components"
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BsFillCheckCircleFill } from "react-icons/bs";

function CourseCard(props) {
    AOS.init();
    return (

        <Container
            data-aos={`fade-${props.type}`}
        >
            <Wrapper>

                <Head>{props.title}</Head>
                <Ul>
                    {
                        props.points.map((point, index) => {

                            return <LI key={index}><Icon /> <Text>{point}</Text></LI>
                        })
                    }

                </Ul>
                <Button>Learn More</Button>
            </Wrapper>
        </Container>
    )
}

export default CourseCard

const Container = tw.div` py-[10%] flex xl:w-[45%] w-[90%] m-4  shadow-xl rounded-xl items-center justify-center`
const Wrapper = tw.div` w-[70%]  `
const Head = tw.h3`lg:text-4xl text-2xl font-semibold mb-10 px-4 w-full leading-[2.75rem]`
const Ul = tw.ul`flex-[1_0_auto]`
const LI = tw.li`text-left text-lg flex justify-start items-baseline pb-3 text-black/80 w-full `
const Icon = tw(BsFillCheckCircleFill)`text-payment-purple text-xl  w-2/12`
const Text = tw.p`w-10/12`
const Button = tw.button`border-black/80 w-full rounded-md lg:py-8 py-4  mt-16 border-2 text-payment-purple hover:bg-payment-purple hover:text-white`