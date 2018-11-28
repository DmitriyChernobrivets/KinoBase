import axios from "axios";
export class Promises {
  constructor() {
    this.API_KEY = "fee40cf045e7a2ddd3eb575c5bb1c4eb";
    this.url = "https://api.themoviedb.org/3/";
  }
  async filmsPromise(query, page) {
    return await axios
      .get(
        `${this.url}movie/${query}?api_key=${
          this.API_KEY
        }&language=ru-RU&page=${page}`
      )
      .catch(err => console.log(err));
  }
  async SeriasPromise(query, page) {
    return await axios.get(
      `${this.url}tv/${query}?api_key=${
        this.API_KEY
      }&language=ru-RU&page=${page}`
    );
  }
  async searchInputPromise(query) {
    return await axios.get(
      `${this.url}search/movie?api_key=${
        this.API_KEY
      }&language=en-US&query=${query}&page=1&include_adult=false`
    );
  }
  async cardFilmsPromise(id) {
    const trailer = await axios.get(
      `${this.url}movie/${id}/videos?api_key=${this.API_KEY}&language=ru-RU`
    );
    const moviesById = await axios.get(
      `${this.url}movie/${id}?api_key=${this.API_KEY}&language=ru-RU`
    );
    const actors = await axios.get(
      `${this.url}movie/${id}/credits?api_key=${this.API_KEY}`
    );
    const movieImages = await axios.get(
      `${this.url}movie/${id}/images?api_key=${this.API_KEY}`
    );
    return [trailer, moviesById, actors, movieImages];
  }
  async cardTVPromise(id) {
    const trailer = await axios.get(
      `${this.url}tv/${id}/videos?api_key=${this.API_KEY}&language=ru-RU`
    );
    const tvById = await axios.get(
      `${this.url}tv/${id}?api_key=${this.API_KEY}&language=ru-RU`
    );
    const actors = await axios.get(
      `${this.url}tv/${id}/credits?api_key=${this.API_KEY}`
    );
    const tvImages = await axios.get(
      `${this.url}tv/${id}/images?api_key=${this.API_KEY}`
    );
    return [trailer, tvById, actors, tvImages];
  }
  async genres(genre_id) {
    return await axios.get(
      `${this.url}discover/movie?api_key=${
        this.API_KEY
      }&language=ru-RU&include_adult=false&include_video=false&page=1&with_genres=${genre_id}`
    );
  }
}
