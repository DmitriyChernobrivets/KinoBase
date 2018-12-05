import errorMsg from "../../../templates/error.hbs";
import axios from "axios";
export class Promises {
  constructor() {
    this.API_KEY = "fee40cf045e7a2ddd3eb575c5bb1c4eb";
    this.url = "https://api.themoviedb.org/3/";
    this.error = {
      network: "Network failed. Try again later"
    };
  }
  async filmsPromise(query, page) {
    return await axios
      .get(
        `${this.url}movie/${query}?api_key=${
          this.API_KEY
        }&language=ru-RU&page=${page}`
      )

      .catch(errorCheck);
  }
  async SeriasPromise(query, page) {
    return await axios
      .get(
        `${this.url}tv/${query}?api_key=${
          this.API_KEY
        }&language=ru-RU&page=${page}`
      )
      .catch(errorCheck);
  }
  async searchInputPromise(query) {
    return await axios
      .get(
        `${this.url}search/movie?api_key=${
          this.API_KEY
        }&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .catch(errorCheck);
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
    const movieImages = await axios
      .get(`${this.url}movie/${id}/images?api_key=${this.API_KEY}`)
      .catch(errorCheck);
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
    const tvImages = await axios
      .get(`${this.url}tv/${id}/images?api_key=${this.API_KEY}`)
      .catch(errorCheck);
    return [trailer, tvById, actors, tvImages];
  }
}

function rednderError(obj) {
  const item = document.querySelector(".container");
  const markup = errorMsg(obj);
  item.innerHTML = markup;
}
function errorCheck(error) {
  if (error.response === undefined) {
    rednderError(this.error);
  }
  if (error) {
    rednderError(error.response.data);
  }
}
