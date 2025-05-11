import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  List,
  ListItem,
  HStack,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                  objectFit="cover"
                />
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  onClick={() => onSelectGenre(genre)}
                  variant="link"
                  fontSize="lg"
                  fontWeight={
                    selectedGenre?.id === genre.id ? "bold" : "normal"
                  }
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
