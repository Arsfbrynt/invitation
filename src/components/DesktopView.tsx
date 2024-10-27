import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import invitatoConstant from "../apps/invitato.constant";

const DesktopView: React.FC = () => {
  const [type, setType] = useState<string | null>(null);
  const [val, setVal] = useState<any | null>(null);
  const [name, setName] = useState<any | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setType(params?.get("type"));
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
  }, [type]);

  return val ? (
    <Box
      minWidth="700px"
      width="calc(100% - 500px)"
      backgroundImage={`linear-gradient(rgb(50 48 48 / 48%), rgba(50, 48, 48, 0.5)), url(${val.bgImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      p={42}
      color="white"
      height="100vh"
      borderRight="8px"
      borderRightStyle="solid"
      borderRightColor={"blackAlpha.400"}
    >
        <Heading
          as="h1"
          fontSize="1rem"
          fontWeight="extrabold"
          letterSpacing="2px"
          textTransform="uppercase" 
        >
          {val?.title}
        </Heading>
        <Heading
          as="h2"
          paddingTop="6"
          fontWeight="medium"
          fontFamily="headingAlternative"
          textTransform="uppercase"
          fontSize="5rem"
          width="410px"
        >
          {name || '-'}
        </Heading>

      <Text
        fontStyle="italic"
        marginTop={4}
        fontWeight="light"
        letterSpacing="1px"
        maxWidth="800px"
      >
        {val?.motto}
      </Text>
    </Box>
  ) : null;
};

export default DesktopView;
