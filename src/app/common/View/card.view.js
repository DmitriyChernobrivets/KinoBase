import { View } from "../../mvc/view";

import trailerFrame from "../../../templates/trailerFrame.hbs";
import actorsSlider from "../../../templates/actorsSlider.hbs";
import movieImagesSlider from "../../../templates/movieImagesSlider.hbs";

import { lory } from "../../../helpers/slider/lory.min.js";
export class CardView extends View {
  constructor(template) {
    super(template);

    this.container = document.querySelector(".container");
    this.container.addEventListener("click", this.cardClickEvent.bind(this));
    this.filmsBtn = document.querySelector(".js-top-films-btn");
    // console.log(this.container);
  }
  cardClickEvent({ target }) {
    if (!target.classList.contains("card-img")) return;
    if (this.filmsBtn.classList.contains("top-nav-open")) {
      this.emite("cardEnterFilms", target.parentElement.dataset.id);
    } else {
      this.emite("cardEnterTV", target.parentElement.dataset.id);
    }
  }
  trailerFrameDraw(obj) {
    const iframeContainer = document.querySelector(".trailer-frame");
    const template = trailerFrame(obj);

    iframeContainer.innerHTML = template;
  }

  cardSlidersAppend(arr1, arr2) {
    actorSliderCreate(arr1);
    movieImagesSliderCreate(arr2);
    const slider = document.querySelector(".js_slider");
    lory(slider, {});
    $(".slider-slick").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    });
  }
}

function actorSliderCreate(arr) {
  const actorSliderContainer = document.querySelector(".actor-list");
  const template = actorsSlider(arr);
  actorSliderContainer.innerHTML = template;
}

function movieImagesSliderCreate(arr) {
  const movieImagesContainer = document.querySelector(".movie-images-list");
  const template = movieImagesSlider(arr);
  movieImagesContainer.innerHTML = template;
}
