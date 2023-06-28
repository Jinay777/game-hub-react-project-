import {
  FaWindows,
  FaXbox,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaAndroid,
} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: props) => {
  const iconMap:{[key:string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android:FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  }
  return (
    <HStack marginY="10px">
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500"/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
