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
    this.searchBtn.addEventListener("click", this.getGlobalsearch.bind(this));
  }
  getFilmsCategory({ target }) {
    if (target.classList.contains("film")) {
      this.emite("films", target.dataset.query);
    }
  }
  getTVCategory({ target }) {
    if (target.classList.contains("TV")) {
      this.emite("TV", target.dataset.query);
    }
  }
  getGlobalsearch() {
    const value = this.searchInput.value;
    this.emite("globalSearch", value);
  }
}
