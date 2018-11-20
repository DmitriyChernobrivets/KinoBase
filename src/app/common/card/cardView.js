import EE from "../../helpers/EventEmmiter/EventEmmiter";
import card from "../../templates/card.hbs";
import actorsSlider from "../../templates/actorsSlider.hbs";
import movieImagesSlider from "../../templates/movieImagesSlider.hbs";
import trailerFrame from "../../templates/trailerFrame.hbs";
import { lory } from "../../helpers/slider/lory.min.js";
export default class CardView extends EE {
  constructor() {
    super();
    this.container = document.querySelector(".container");
  }

  card(arr) {
    const template = card(arr);
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

  cardClickEvent({ target }) {
    if (target.parentElement.nodeName !== "LI") return;
    this.emite("cardEnter", target.parentElement.dataset.id);
  }
}
