import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchReponse } from "@/services/api-client";
import platforms from "@/data/platforms";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchReponse<Platform>, Error>(["platforms"], apiClient.getAll, {
    staleTime: 1000 * 60 * 60 * 24,
    initialData: {
      count: platforms.length,
      results: platforms,
      next: null,
      previous: null,
    },
  });

export default usePlatforms;
