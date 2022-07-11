import React from "react";
import tw from "tailwind-styled-components";
import FooterOption from "./FooterOption";
import data from "./footerList";

function FooterOptions() {
  return (
    <Container>
      {data.map((item, index) => {
        return <FooterOption item={item} key={item.title} type="link" />;
      })}
    </Container>
  );
}

export default FooterOptions;

const Container = tw.div`flex flex-col xl:flex-row w-full  xl:w-8/12`;
