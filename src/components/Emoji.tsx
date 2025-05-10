import bullsEye from "../assets/bulls-eye.webp";
import thumpUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image } from "@chakra-ui/react";
import { ComponentProps } from "react"; // ✅ for extracting prop types

type CustomImageProps = ComponentProps<typeof Image>;

interface EmojiProps {
  rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: CustomImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumpUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} boxSize="25px" marginTop={1} />;
};

export default Emoji;
