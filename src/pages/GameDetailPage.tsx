import ExpandableText from "@/components/ExpandableText";
import useGame from "@/hooks/useGame";
import { Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); //slug is a string, so we can use the non-null assertion operator (!)

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
