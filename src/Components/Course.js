import React from 'react'
import CourseCard from './CourseCard'
import tw from 'tailwind-styled-components'

function Course() {
    return (
        <Section>

            <Container>
                <CourseCard title="JEE Main Previous Year Questions (2019-21)| 2400 Solved Questions" points={['2019-2021 Chapter wise Previous Year Questions', '800 Solved Previous Year Questions/subject', 'Video Solutions of all PYQS (PCM)', '2019-2020 PYQS are Chapter wise Solved', '2021 JEE Main Paper will be Complete Solved'
                ]} />
                <CourseCard title="RUDRA Batch - Class XII JEE" points={['650+ Hours of Lecture Content',
                    '180+ Live Doubt & Practice Sessions',
                    '3500+ JEE Main Previous Year',
                    'Questions+Solutions (Chapterwise)',
                    '1000+ JEE Advanced Previous Year Questions+Solutions (Chapterwise)',
                    '3000+ Daily Practice Questions+Solutions']} />

                <CourseCard title="Yoddha Batch : Class 12th Boards Term 2" points={['This batch is for Class 12th Boards',
                    'Complete Term 2 PCMB will be covered by 19th April',
                    ' 5 Full Syllabus Tests + Short Notes + Lecture Notes',
                    ' Live Classes (Recordings available)',
                    'Live Sessions on every Sunday with Aman Bhaiya']} />

            </Container>
        </Section>
    )
}

export default Course

const Section = tw.section`px-32 w-screen my-12`
const Container = tw.div`flex flex-wrap justify-center gap-x-3 gap-y-8  w-full`