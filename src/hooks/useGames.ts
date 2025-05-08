import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return; 
        setError(error);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
