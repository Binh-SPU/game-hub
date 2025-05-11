import { useQuery } from "@tanstack/react-query";
import genres from "@/data/genres";
import ApiClient, { FetchReponse } from "@/services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchReponse<Genre>, Error>(["genres"], apiClient.getAll, {
    staleTime: 1000 * 60 * 60 * 24,
    initialData: {
      count: genres.length,
      results: genres,
      next: null,
      previous: null,
    },
  });

export default useGenres;
