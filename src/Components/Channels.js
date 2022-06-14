import React from "react";
import tw from "tailwind-styled-components";
import ChannelCard from "./ChannelCard";

function Channels() {
  return (
    <Container>
      <Head>Our Channels</Head>
      <Wrapper>
        {[
          {
            name: "Aman Dhattarwal",
            img: "aman_dhattarwal.jpg",
            type: "Main Channel",
            subscriber: "4.0M",
          },
          {
            name: "Apni Kaksha",
            img: "apni_kaksha.png",
            type: "XI & XII",
            subscriber: "1.5M",
          },
          {
            name: "Apna College",
            img: "apna_college.png",
            type: "College & Tech",
            subscriber: "1.8M",
          },
          {
            name: "Hustlers Bay",
            img: "hustlers_bay.png",
            type: "Podcasts",
            subscriber: "332.0K",
          },
          {
            name: "Apna Zayka",
            img: "apna_zayka.jpg",
            type: "Daily Vlogs",
            subscriber: "86.7K",
          },
          {
            name: "Apni Kaksha - 9th & 10th",
            img: "apni_kaksha_9th-10th.png",
            type: "IX & X",
            subscriber: "148.0K",
          },
        ].map((item) => {
          return <ChannelCard key={item.name} item={item} />;
        })}
      </Wrapper>
    </Container>
  );
}

export default Channels;

const Container = tw.section`bg-blue-light`;
const Head = tw.h1` text-center text-5xl font-semibold py-12`;
const Wrapper = tw.section`flex flex-wrap  items-center justify-center `;
