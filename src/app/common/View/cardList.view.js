// import cardListTemplate from "../../../templates/cardList.hbs";
import { View } from "../../mvc/view";

export class CardListView extends View {
  constructor(template) {
    super(template);
    this.filmsBtn = document.querySelector(".js-top-films-btn");
    this.serasTVBtn = document.querySelector(".js-top-serias-btn");
    this.searchBtn = document.querySelector(".search-btn");
    this.searchInput = document.querySelector(".search");
    this.pagination = document.querySelector(".pagination-wrapper");
    document.body.addEventListener("click", this.getFilmsCategory.bind(this));
    document.body.addEventListener("click", this.getTVCategory.bind(this));
    this.searchBtn.addEventListener("click", this.getGlobalsearch.bind(this));
    this.pagination.addEventListener(
      "click",
      this.getPaginationValue.bind(this)
    );
  }

  getFilmsCategory({ target }) {
    if (target.classList.contains("film")) {
      this.emite("films", target.dataset.query);
      setCurrentPagePaginationStyle(null, true);
    }
  }
  getTVCategory({ target }) {
    if (target.classList.contains("TV")) {
      this.emite("TV", target.dataset.query);
      setCurrentPagePaginationStyle(null, true);
    }
  }
  getGlobalsearch() {
    const value = this.searchInput.value;
    this.emite("globalSearch", value);
    this.searchInput.value = "";
  }
  getPaginationValue({ target }) {
    if (!target.classList.contains("page-numbers")) return;
    // const currentCategoryValue = currentCategory();
    setCurrentPagePaginationStyle(target);
    this.filmsBtn.classList.contains("top-nav-open")
      ? this.emite("films", this.filmsBtn.dataset.query, target.textContent)
      : this.emite("TV", this.serasTVBtn.dataset.query, target.textContent);
  }
}

function setCurrentPagePaginationStyle(target, reset) {
  const items = document.querySelectorAll(".page-numbers");
  if (reset) {
    items.forEach(el => el.classList.remove("current"));
    items[0].classList.add("current");
    return;
  }
  items.forEach(el => el.classList.remove("current"));
  target.classList.add("current");
}
