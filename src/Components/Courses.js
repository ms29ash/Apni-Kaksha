import React from 'react'
import tw from 'tailwind-styled-components'
import { useParams } from 'react-router-dom';

import { AiOutlineRight } from "react-icons/ai";
import { BsGraphUp, BsCameraVideo, BsFileText, BsPhone } from "react-icons/bs";
import { RiShareForward2Line } from "react-icons/ri";
import { CgInfinity } from "react-icons/cg";
import data from './database'
function Courses() {
    const { id } = useParams();
    const { title, description, views, link } = data[id] || {};
    return (
        <Container>
            <Details>
                <Head>{title}</Head>
                <Text>{description}</Text>
                <Views><GraphIcon />{views} Views</Views>
                <Button><ShareIcon />Share</Button>
            </Details>
            <Wrapper>
                <Course>
                    <iframe width="560" height="350" class="w-full" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                    <CourseDetails>
                        <CodeDetailsHead>
                            This course includes :
                        </CodeDetailsHead>
                        < Duration><VideoIcon /> 10hr 5min 45s hours on-demand video</Duration>
                        <Articles><ArticleIcon /> 0 articles</Articles>
                        <Access><InfinityIcon /> Full lifetime access</Access>
                        <Device><PhoneIcon />Access on mobile and TV</Device>

                    </CourseDetails>
                </Course>
            </Wrapper>
        </Container>
    )
}

export default Courses


const Container = tw.div`bg-purple-blue-light p-5 xl:p-20 flex w-full flex-col xl:items-start items-center xl:flex-row`
const Wrapper = tw.div`relative px-20  xl:w-1/2 w-full`
const Details = tw.div`xl:w-1/2 `
const Course = tw.div`flex flex-col md:rounded-lg md:shadow-lg justify-items-center  bg-white p-2 md:p-1 md:mx-2 xl:absolute xl:right-0 top-0`
const Head = tw.h1`text-3xl font-semibold `
const Text = tw.p` py-8`
const Views = tw.p`flex text-xl items-center `
const GraphIcon = tw(BsGraphUp)`mr-2 text-xl font-bold`
const Button = tw.button`flex text-xl items-center text-payment-purple border-2  px-5 py-2 rounded-xl border-payment-purple  my-6 hover:scale-105 transition-all`
const ShareIcon = tw(RiShareForward2Line)`mr-2 text-xl font-bold`
const CourseDetails = tw.div`p-4`
const CodeDetailsHead = tw.h1`text-3xl my-6`
const Duration = tw.div`flex items-center text-xl my-4`
const VideoIcon = tw(BsCameraVideo)`text-3xl font-bold mr-3`
const ArticleIcon = tw(BsFileText)`text-3xl font-bold mr-3`
const InfinityIcon = tw(CgInfinity)`text-3xl font-bold mr-3`
const PhoneIcon = tw(BsPhone)`text-3xl font-bold mr-3`
const Articles = tw(Duration)``
const Access = tw(Duration)``
const Device = tw(Duration)``
