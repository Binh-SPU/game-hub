import axios, { AxiosRequestConfig } from "axios";

export interface FetchReponse<T> {
  count: number;
  results: T[];
  next: string | null;
  previous: string | null;
}

const axiosInstance = axios.create({
  params: {
    key: "647f6924a32f4eb6b9a887aa5ef925bd",
  },
  baseURL: "https://api.rawg.io/api",
});

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchReponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = async (id: string | number) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default ApiClient;
