import cardLists from "../templates/cardList.hbs";
import card from "../templates/card.hbs";

import trailerFrame from "../templates/trailerFrame.hbs";
import movieImagesSlider from "../templates/movieImagesSlider.hbs";
import actorsSlider from "../templates/actorsSlider.hbs";
import EE from "./EventEmmiter";
export default class View extends EE {
  constructor() {
    super();
    this.container = document.querySelector(".container");
    this.btnMovies = document.querySelector(".js-btn-movies");
    this.btnSeries = document.querySelector(".js-btn-series");
    this.btnTopRated = document.querySelector(".js-btn-toprated");
    this.btnLatest = document.querySelector(".js-btn-latest");
    this.select = document.querySelector("#genres");
  }
  cardList(arr) {
    const template = cardLists(arr);
    this.container.innerHTML = template;
  }
  card(obj) {
    const template = card(obj);
    this.container.innerHTML = template;
  }
  actorSliderCreate(arr) {
    const actorSliderContainer = document.querySelector(".actor-list");
    const template = actorsSlider(arr);
    actorSliderContainer.innerHTML = template;
  }
  movieImagesSliderCreate(arr) {
    const movieImagesContainer = document.querySelector(".movie-images-list");
    const template = movieImagesSlider(arr);
    movieImagesContainer.innerHTML = template;
  }
  cardSlidersAppend(arr1, arr2) {
    this.actorSliderCreate(arr1);
    this.movieImagesSliderCreate(arr2);
    Array.prototype.slice
      .call(document.querySelectorAll(".js_slider"))
      .forEach(function(element) {
        lory(element, {});
      });
  }

  trailerFrameDraw(obj) {
    const iframeContainer = document.querySelector(".trailer-frame");
    const template = trailerFrame(obj);

    iframeContainer.innerHTML = template;
  }
  movieImagesDraw(obj) {
    const movieImagesContainer = document.querySelector(".movie-images-list");
    const template = movieImages(obj);

    movieImagesContainer.innerHTML = template;
  }
  cardClickEvent({ target }) {
    if (target.parentElement.nodeName !== "LI") return;
    this.emite("cardEnter", target.parentElement.dataset.id);
  }
  genreHandler({ target }) {
    if (target.nodeName !== "OPTION") return;
    console.log(target.nodeName);
    this.emite("genreSelect", target.value);
  }
}
