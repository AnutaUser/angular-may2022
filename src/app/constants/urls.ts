import {environment} from "../../environments/environment";

const {API, API_KEY} = environment;

export const urls = {
  movies: `${API}/discover/movie`,
  // movies: `${API}/discover/movie?api_key=${API_KEY}`,
  genre: `${API}/genre/movie/list`
}
