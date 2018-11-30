// import cardListTemplate from "../../../templates/cardList.hbs";
import { View } from "../../mvc/view";

export class CardListView extends View {
  constructor(template) {
    super(template);
    this.filmsBtn = document.querySelector(".js-top-films-btn");
    this.serasTVBtn = document.querySelector(".js-top-serias-btn");
    this.searchBtn = document.querySelector(".search-btn");
    this.searchInput = document.querySelector(".search");

    document.body.addEventListener("click", this.getFilmsCategory.bind(this));
    document.body.addEventListener("click", this.getTVCategory.bind(this));
    this.searchBtn.addEventListener(
      "click",
      this.getGlobalsearchValue.bind(this)
    );
    this.pagination.addEventListener(
      "click",
      this.getPaginationValue.bind(this)
    );
  }

  getFilmsCategory({ target }) {
    if (target.classList.contains("film")) {
      this.eventEmite("films", target.dataset.query);
      setCurrentPagePaginationStyle(null, true);
    }
  }
  getTVCategory({ target }) {
    if (target.classList.contains("TV")) {
      this.eventEmite("TV", target.dataset.query);
      setCurrentPagePaginationStyle(null, true);
    }
  }
  getGlobalsearchValue() {
    const value = this.searchInput.value;
    this.eventEmite("globalSearch", value);
    this.searchInput.value = "";
  }
  getPaginationValue({ target }) {
    if (!target.classList.contains("page-numbers")) return;
    setCurrentPagePaginationStyle(target);
    this.filmsBtn.classList.contains("top-nav-open")
      ? this.eventEmite(
          "films",
          this.filmsBtn.dataset.query,
          target.textContent
        )
      : this.eventEmite(
          "TV",
          this.serasTVBtn.dataset.query,
          target.textContent
        );
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
