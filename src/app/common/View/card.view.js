import { View } from "../../mvc/view";

import trailerFrame from "../../../templates/trailerFrame.hbs";
import actorsSlider from "../../../templates/actorsSlider.hbs";
import movieImagesSlider from "../../../templates/movieImagesSlider.hbs";

import { lory } from "../../../helpers/slider/lory.min.js";
export class CardView extends View {
  constructor(config) {
    super(config);

    this.container = document.querySelector(".container");
    this.container.addEventListener("click", this.cardClickEvent.bind(this));
    // console.log(this.container);
  }
  cardClickEvent({ target }) {
    if (target.parentElement.nodeName !== "LI") return;
    this.emite("cardEnter", target.parentElement.dataset.id);
  }
  trailerFrameDraw(obj) {
    const iframeContainer = document.querySelector(".trailer-frame");
    const template = trailerFrame(obj);

    iframeContainer.innerHTML = template;
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
        lory(element);
      });
  }
}
