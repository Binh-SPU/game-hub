import genres from "@/data/genres";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchReponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchReponse<Genre>>("/genres")
        .then((res) => res.data.results),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: genres,
  });

export default useGenres;
