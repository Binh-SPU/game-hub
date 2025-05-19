import genres from "@/data/genres";
import ApiClient, { FetchReponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Genre from "../entities/Genre";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchReponse<Genre>, Error>(["genres"], apiClient.getAll, {
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
