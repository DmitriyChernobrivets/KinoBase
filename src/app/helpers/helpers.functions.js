import errorMsg from "../../templates/error.hbs";
import actorsSlider from "../../templates/actorsSlider.hbs";
import movieImagesSlider from "../../templates/movieImagesSlider.hbs";

const errorCheck = error => {
  if (error.response === undefined) {
    renderError(this.error);
  }
  if (error) {
    renderError(error.response.data);
  }
};
function ifFavoritesEmpty() {
  const favoritesList = document.querySelectorAll(".fav-item");
  if (
    favoritesList.length === 0 &&
    this.view.favoriteBtn.classList.contains("top-nav-open")
  ) {
    this.view.render(this.model.errorObject);
  }
}

function currentTopNavPosition(category, subcategory) {
  this.topNavMenuLinks.forEach(el => {
    el.classList.remove("top-nav-open");
    if (el.classList.contains(category)) {
      el.classList.add("top-nav-open");
      el.dataset.query = subcategory;
    }
  });
}

const ifTopNavClicked = (target, subcategory) => {
  if (target.classList.contains("top-menu-link")) {
    target.dataset.query = subcategory;
  }
};
const setCurrentPagePaginationStyle = (target, reset) => {
  const items = document.querySelectorAll(".page-numbers");
  if (reset) {
    items.forEach(el => el.classList.remove("current"));
    items[0].classList.add("current");
    return;
  }
  items.forEach(el => el.classList.remove("current"));
  target.classList.add("current");
};
const actorSliderCreate = arr => {
  const actorSliderContainer = document.querySelector(".actor-list");
  const template = actorsSlider(arr);
  actorSliderContainer.innerHTML = template;
};

const movieImagesSliderCreate = arr => {
  const movieImagesContainer = document.querySelector(".movie-images-list");
  const template = movieImagesSlider(arr);
  movieImagesContainer.innerHTML = template;
};
const renderError = obj => {
  const item = document.querySelector(".container");
  const markup = errorMsg(obj);
  item.innerHTML = markup;
};
const updateFavNode = value => {
  const favNodeNotification = document.querySelector(".fav-notification");
  if (value === 0) {
    favNodeNotification.style.display = "none";
  } else {
    favNodeNotification.style.display = "block";
    favNodeNotification.textContent = `(${value})`;
  }
};
export {
  errorCheck,
  ifFavoritesEmpty,
  currentTopNavPosition,
  ifTopNavClicked,
  setCurrentPagePaginationStyle,
  actorSliderCreate,
  movieImagesSliderCreate,
  updateFavNode
};
