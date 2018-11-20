import axios from "axios";
export class Model {
  constructor() {
    this.API_KEY = "fee40cf045e7a2ddd3eb575c5bb1c4eb";
    this.url = "https://api.themoviedb.org/3/";
  }
  async latestPromise(query = "now_playing") {
    return await axios.get(
      `${this.url}movie/${query}?api_key=${this.API_KEY}&language=en-US&page=1`
    );
  }

  async topRatedPromise() {
    return await axios.get(
      `${this.url}movie/top_rated?api_key=${this.API_KEY}&language=en-US&page=1`
    );
  }
  async upComingPromise() {
    return await axios.get(
      `${this.url}movie/upcoming?api_key=${this.API_KEY}&language=en-US&page=1`
    );
  }

  async cardPromise(id) {
    const trailer = await axios.get(
      `${this.url}movie/${id}/videos?api_key=${this.API_KEY}&language=en-US`
    );
    const moviesById = await axios.get(
      `${this.url}movie/${id}?api_key=${this.API_KEY}&language=en-US`
    );
    const actors = await axios.get(
      `${this.url}movie/${id}/credits?api_key=${this.API_KEY}`
    );
    const movieImages = await axios.get(
      `${this.url}movie/${id}/images?api_key=${this.API_KEY}`
    );
    return [trailer, moviesById, actors, movieImages];
  }
  async genres(genre_id) {
    return await axios.get(
      `${this.url}discover/movie?api_key=${
        this.API_KEY
      }&language=en-US&include_adult=false&include_video=false&page=1&with_genres=${genre_id}`
    );
  }
}

export const model = new Model();
