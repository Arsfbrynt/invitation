import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import components from "../components/register";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import invitatoConstant from "../apps/invitato.constant";

interface MobileViewProps {
  onOpenChange: (isOpen: boolean) => void; 
}

const MobileView: React.FC<MobileViewProps> = ({ onOpenChange }) => {
  const [type, setType] = useState<string | null>(null);
  const [val, setVal] = useState<any | null>(null);
  const [name, setName] = useState<any | null>(null);
  const [open, setOpen] = useState<boolean | false>(false);

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

  useEffect(() => {
    onOpenChange(open);
  }, [open, onOpenChange]);

  const settings = {
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    infinite: true,
    arrows: false,
    accessibility: false,
    adaptiveHeight: true,
    waitForAnimate: false,
  };

  return val ? (
    !open ? (
      <Box
        width="500px"
        p={4}
        backgroundImage={`linear-gradient(rgb(50 48 48 / 48%), rgba(50, 48, 48, 0.5)), url(${val.images[2]})`}
        backgroundSize="cover"
        backgroundPosition="center"
        height='100%'
        minHeight="100vh"
        color="white"
      >
        <Heading
          as="h1"
          marginTop="60px"
          padding={2}
          fontSize="1rem"
          textAlign="center"
          fontWeight="extrabold"
          letterSpacing="2px"
          textTransform="uppercase"
        >
          {val.title}
        </Heading>

        <Flex
          width="100%"
          height="70vh"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
        >
          <Text
            textTransform="uppercase"
            fontSize={36}
            fontFamily="headingAlternative"
          >
            {name}
          </Text>
          <Text
            fontFamily="headingAlternative"
            fontSize={24}
            fontStyle="italic"
          >
            #TImetoshaRE
          </Text>
        </Flex>
        <Stack display="flex" alignItems="center">
          <Button
            className="bounce"
            textAlign="center"
            color={"blackAlpha.500"}
            width={90}
            height={7}
            borderRadius={0}
            fontStyle="italic"
            transform="-12vh"
            onClick={() => setOpen(true)} 
          >
            Open
          </Button>
        </Stack>
      </Box>
    ) : (
      <Box
        width="500px"
        height="100vh"
        color="white"
        position="relative"
        whiteSpace="nowrap"
        overflowX="hidden"
        overflowY="auto"
        zIndex={1}
      >
        <Slider {...settings}>
          {val.images.map((image: any, index: number) => (
            <div key={index}>
              <Box
                width="500px"
                backgroundImage={`linear-gradient(rgb(50 48 48 / 48%), rgba(50, 48, 48, 0.5)), url(${image})`}
                backgroundSize="cover"
                backgroundPosition="center"
                height="100vh"
                position="relative"
                zIndex={1}
                className="zoom-bg"
              />
            </div>
          ))}
        </Slider>

        <Stack
          position="absolute"
          top={0}
          width="100%"
          height="100%"
          color="white"
          zIndex={2}
          alignItems="center"
        >
          <Heading
            as="h1"
            marginTop="60px"
            padding={2}
            fontSize="1rem"
            textAlign="center"
            fontWeight="extrabold"
            letterSpacing="2px"
            textTransform="uppercase"
          >
            {val.title}
          </Heading>

          <Flex
            width="100%"
            height="70vh"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
          >
            <Text
              textTransform="uppercase"
              fontSize={36}
              fontFamily="headingAlternative"
            >
              {name}
            </Text>
            <Text
              fontFamily="headingAlternative"
              fontSize={24}
              fontStyle="italic"
            >
              #TImetoshaRE
            </Text>
          </Flex>

          
          <Text
            transform="-6vh"
            fontSize="12px"
            textAlign="center"
            fontWeight="extrabold"
            letterSpacing="2px"
            textTransform="uppercase" 
          >
            Scroll To Begin
          </Text>
          <svg
            stroke="currentColor"
            fill="currentColor"
            className="bounce"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="17"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
          </svg>
        </Stack>
        {React.createElement(components["MobileContent"])}
      </Box>
    )
  ) : null;
};

export default MobileView;
