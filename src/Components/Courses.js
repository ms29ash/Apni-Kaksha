import React from 'react'
import tw from 'tailwind-styled-components'
import { useParams } from 'react-router-dom';
import { BsGraphUp, BsCameraVideo, BsFileText, BsPhone } from "react-icons/bs";
import { RiShareForward2Line } from "react-icons/ri";
import { CgInfinity } from "react-icons/cg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from '../axios'
import { useEffect, useState } from 'react';
import BreadCrump from './BreadCrump';

function Courses() {
    const [data, setData] = useState()

    AOS.init({});
    const getUser = async (id) => {
        try {
            const response = await axios.get(`/course/${id}`);
            setData(response.data[0])
        } catch (error) {
            console.error(error);
        }
    }
    const { id } = useParams();
    useEffect(() => {
        getUser(id)

    })
    const { title, description, views, link, time, article } = data || {};
    return (
        <>
            <Page>
                {/* <BreadCrump /> */}
                {data &&
                    <Container>
                        <Details data-aos='fade-right'>
                            <Head>{title}</Head>
                            <Text>{description}</Text>
                            <Views><GraphIcon />{views} Views</Views>
                            <Button><ShareIcon />Share</Button>
                        </Details>
                        <Wrapper>
                            <Course data-aos='fade-left'>
                                <iframe width="560" height="350" className="w-full" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                <CourseDetails>
                                    <CodeDetailsHead>
                                        This course includes :
                                    </CodeDetailsHead>
                                    < Duration data-aos='fade-left' data-aos-once="true"><VideoIcon /> {time} hours on-demand video</Duration>
                                    <Articles data-aos='fade-left' data-aos-once="true"><ArticleIcon /> {article} articles</Articles>
                                    <Access data-aos='fade-left' data-aos-once="true"><InfinityIcon /> Full lifetime access</Access>
                                    <Device data-aos='fade-left' data-aos-once="true"><PhoneIcon />Access on mobile and TV</Device>

                                </CourseDetails>
                            </Course>
                        </Wrapper>
                    </Container>
                }
            </Page>
        </>
    )
}

export default Courses

const Page = tw.div`bg-purple-blue-light  p-5 xl:px-20 xl:py-16 xl:mb-[100vh] mb-[10vh] `
const Container = tw.div`flex w-full flex-col xl:items-start items-center xl:flex-row `
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
const Duration = tw.div`flex items-center text-xl my-4 text-black/80`
const VideoIcon = tw(BsCameraVideo)`text-3xl font-bold mr-3`
const ArticleIcon = tw(BsFileText)`text-3xl font-bold mr-3`
const InfinityIcon = tw(CgInfinity)`text-3xl font-bold mr-3`
const PhoneIcon = tw(BsPhone)`text-3xl font-bold mr-3`
const Articles = tw(Duration)` `
const Access = tw(Duration)` `
const Device = tw(Duration)``

