import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((response) => {
        setGames(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  return (
    <>
      {error && <Text> {error.message}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
