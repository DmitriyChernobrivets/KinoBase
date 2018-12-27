// import cardListTemplate from "../../../templates/cardList.hbs";
import { Services } from "../extends/Services";
import { setCurrentPagePaginationStyle } from "../../helpers/helpers.functions"

export class CardListView extends Services {
  constructor(template) {
    super(template);
    this.filmsBtn = document.querySelector(".js-top-films-btn");
    this.serasTVBtn = document.querySelector(".js-top-serias-btn");
    this.searchForm = document.querySelector(".search-container");
    this.searchInput = document.querySelector(".search");

    document.body.addEventListener("click", this.getFilmsCategory.bind(this));
    document.body.addEventListener("click", this.getTVCategory.bind(this));
    this.searchForm.addEventListener(
      "submit",
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
  getGlobalsearchValue(e) {
    e.preventDefault();

    if (!this.searchInput.value) return;
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

