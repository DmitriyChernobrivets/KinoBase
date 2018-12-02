import { Services } from "../../Services/Services";

import trailerFrame from "../../../templates/trailerFrame.hbs";
import actorsSlider from "../../../templates/actorsSlider.hbs";
import movieImagesSlider from "../../../templates/movieImagesSlider.hbs";

import { lory } from "../../Services/slider/lory.min.js";
export class CardView extends Services {
  constructor(template) {
    super(template);
    this.sliderConfig = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    this.container = document.querySelector(".container");
    this.container.addEventListener("click", this.cardClickEvent.bind(this));
    this.filmsBtn = document.querySelector(".js-top-films-btn");
  }
  cardClickEvent({ target }) {
    if (
      !target.classList.contains("card-list_overlay") &&
      !target.classList.contains("js-card-click")
    )
      return;
    if (
      this.filmsBtn.classList.contains("top-nav-open") ||
      target.closest("li").dataset.category === "film"
    ) {
      this.eventEmite("cardEnterFilms", target.closest("li").dataset.id);
    } else {
      this.eventEmite("cardEnterTV", target.closest("li").dataset.id);
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
    lory(slider);
    $(".slider-slick").slick(this.sliderConfig);
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
