import axios from "axios";

export default axios.create({
  params: {
    key: "647f6924a32f4eb6b9a887aa5ef925bd",
  },
  baseURL: "https://api.rawg.io/api",
});
