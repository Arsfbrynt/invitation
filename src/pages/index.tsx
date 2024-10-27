import React, { useState, useEffect } from "react";
import components from "../components/register"; 
import { audioFiles } from "../assets/song/song";
import {
  Flex,
  Button,
  useMediaQuery,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";

const HomePage: React.FC = () => {
  const [isMobileViewOpen, setIsMobileViewOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [audio, setAudio] = useState(new Audio(audioFiles["1.mp3"]));
  const [isMobile] = useMediaQuery<boolean>(["(max-width: 768px)"]);
  const [type, setType] = useState<string | null>(null);
  const [pause, setPause] = useState(false); 
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setType(params.get("type"));
  }, []);

  useEffect(() => {
    if (type === "syari") {
      const newAudio = new Audio(audioFiles["2.mp3"]); 

      newAudio.loop = true;
      setAudio(newAudio);
    }
    if (type === "adat") {
      const newAudio = new Audio(audioFiles["3.mp3"]);
      newAudio.loop = true;
      setAudio(newAudio);
    } else {
      audio.loop = true; 
    }
  }, [type]);

  useEffect(() => {
    if (isMobileViewOpen) {
      audio
        .play()
        .then(() => {
          console.log("Playback started successfully");
        })
        .catch((error) => {
          console.error("Audio playback failed:", error);
        });
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isMobileViewOpen, audio]);

  const handlePause = (pause: boolean) => {
    if (pause) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const togglePause = () => {
    setPause((prevPause) => !prevPause); 
    handlePause(!pause); 
  };
  const handleOpen = (isOpen: boolean) => {
    setIsMobileViewOpen(isOpen);
    setIsOpened(isOpen);
  };

  const toogleDrawer = () => {
    setDrawer((open) => !open); 
  };

  return (
    <Flex>
      {!isMobile && React.createElement(components["DesktopView"])}
      <components.MobileView onOpenChange={handleOpen} />
      {isOpened && (
        <Stack>
          <Button
            position="absolute"
            onClick={toogleDrawer}
            zIndex="90000"
            bottom="5"
            rounded="50%"
            width={10}
            height={10}
            p={0}
            left="5"
            backgroundColor={"#997a5e"}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              color="#FFFFFF"
              aria-hidden="true"
              focusable="false"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </Button>

          <Button
            position="absolute"
            onClick={togglePause}
            zIndex="90000"
            bottom="5"
            rounded="50%"
            width={10}
            height={10}
            p={0}
            left="65"
            backgroundColor={"#997a5e"}
            className={pause ? "" : "spin-icon"}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              color="#FFFFFF"
              aria-hidden="true"
              focusable="false"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path>
            </svg>
          </Button>
        </Stack>
      )}
      <Drawer
        isOpen={drawer}
        placement="right"
        onClose={() => setDrawer(false)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Hello, I'm Aris</DrawerHeader>

          <DrawerBody lineHeight={8}>
            Experienced in Frontend Engineer, <br />
            Feel free for ask some question about my career, I'm waiting for the
            test result
          </DrawerBody>

          <DrawerFooter>
            I'm added params for type, please try it : <br />
            enum : 'syari', 'adat', and 'normal' for default
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default HomePage;
