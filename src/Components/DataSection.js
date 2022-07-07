import React from "react";
import tw from "tailwind-styled-components";
import DataBox from "./DataBox";

function DataSection(props) {
  return (
    <Container>
      <Head>Total Subscribers</Head>
      <Wrapper>
        {props.subscriber.map((num) => (
          <DataBox num={num} />
        ))}
      </Wrapper>
    </Container>
  );
}

export default DataSection;

const Container = tw.div`mx-16 my-6 flex flex-col items-center`;
const Head = tw.h1`text-3xl`;
const Wrapper = tw.div`flex my-6`;
