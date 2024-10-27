import React, { useEffect, useState, useRef } from "react";
import { Box, Text } from "@chakra-ui/react";
import invitatoConstant from "../apps/invitato.constant";
import Slider from "react-slick";

const MobileContent: React.FC = () => {
  const [type, setType] = useState<string | null>(null);
  const [val, setVal] = useState<any | null>(null);
  const [name, setName] = useState<any | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setType(params.get("type"));
  }, []);

  useEffect(() => {
    const newValue = type
      ? invitatoConstant[type as keyof typeof invitatoConstant]
      : invitatoConstant.normal;
    setVal(newValue);
  }, [type]);

  useEffect(() => {
    const newName = val ? invitatoConstant.name[0] : invitatoConstant.name[1];
    setName(newName);
  }, [val]);


  const settings = {
    customPaging: function (index: number) {
      if (val && Array.isArray(val.images) && val.images[index]) {
        return (
          <a>
            <img src={val.images[index]} alt={`Image ${index + 1}`} />
          </a>
        );
      }
      return <a />;
    },

    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return val ? (
    <Box p={42} height="100vh" color="black" whiteSpace="normal">
      <div
        ref={contentRef}
        className={isVisible ? "fade-in-up" : ""}
      >
        <Box
          width="220px"
          paddingX="0"
          margin="0 auto"
          fontSize="1rem"
          fontWeight="extrabold"
          letterSpacing="2px"
          textTransform="uppercase"
        >
          <Text
            align="center"
            as="h1"
            fontSize="1rem"
            fontWeight="extrabold"
            letterSpacing="2px"
            textTransform="uppercase"
          >
            {val.opening}
          </Text>
        </Box>
        <Text
          align="center"
          as="h2"
          marginY={4}
          fontSize="1.5rem"
          fontFamily="headingAlternative"
          fontWeight="extrabold"
          letterSpacing="2px"
          textTransform="capitalize"
          whiteSpace="normal"
        >
          Welcome To <br />
          {name}'s <br />
          Wedding Website
        </Text>
        <Text
          fontFamily="headingAlternative"
          align="center"
          fontStyle="italic"
          marginBottom={2}
        >
          {val.content}
        </Text>
        <Box paddingY={16} position="relative" zIndex={1}>
          <Slider {...settings}>
            {val.images.map((image: any, index: number) => (
              <div key={index}>
                <img src={image} />
              </div>
            ))}
          </Slider>
        </Box>
      </div>
    </Box>
  ) : null;
};

export default MobileContent;
