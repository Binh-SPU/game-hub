import useScreenshots from "@/hooks/useScreenshots";
import { Image } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";

interface GameScreenshotsProps {
  gameId: number;
}

const GameScreenshots = ({ gameId }: GameScreenshotsProps) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
