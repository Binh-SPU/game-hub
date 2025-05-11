import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchReponse } from "@/services/api-client";
import platforms from "@/data/platforms";
import ms from "ms";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchReponse<Platform>, Error>(["platforms"], apiClient.getAll, {
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
