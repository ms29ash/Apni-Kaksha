import React from "react";
import tw from "tailwind-styled-components";
import FooterOption from "./FooterOption";

function FooterOptions() {
  return (
    <Container>
      {[
        { title: "Contact Us", options: ["Email:support@apnikaksha.net "] },
        {
          title: "Our Channels",
          options: [
            "Aman Dhattarwal",
            " Apni Kaksha",
            "Apna College",
            "Hustlers Bay",
            "Apna Zayka",
            "Apni Kaksha - 9th & 10th",
          ],
        },
        {
          title: "Support",
          options: [
            "Privacy Policy",
            "Refund & Cancellation Policy",
            "Terms and conditions",
          ],
        },
      ].map((items) => {
        return <FooterOption items={items} key={items.title} />;
      })}
    </Container>
  );
}

export default FooterOptions;

const Container = tw.div`flex flex-col xl:flex-row w-full  xl:w-8/12`;
