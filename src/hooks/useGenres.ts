import genres from "@/data/genres";
import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchReponse } from "@/services/api-client";

const apiClient = new ApiClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<FetchReponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24,
    initialData: {count: genres.length, results: genres},
  });

export default useGenres;
