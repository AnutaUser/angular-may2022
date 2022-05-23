import {environment} from "../../environments/environment";

const {API} = environment;

export const urls = {
  character: `${API}/character`,
  location: `${API}/location`,
  episode: `${API}/episode`,
}
