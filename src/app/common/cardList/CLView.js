import cardLists from "../../templates/cardList.hbs";
import { createPagination } from "../../helpers/pagination/pagination.js";
import EE from "../../helpers/EventEmmiter/EventEmmiter";

export default class ViewCardList extends EE {
  constructor() {
    super();
    this.container = document.querySelector(".container");
    this.btnMovies = document.querySelector(".js-btn-movies");
    this.btnTopRated = document.querySelector(".js-btn-toprated");
    this.btnLatest = document.querySelector(".js-btn-latest");
    this.select = document.querySelector("#genres");
    this.pagination = document.querySelector("#pagination");
    this.a = 1;
    this.films = document.querySelector(".films");
    this.container.addEventListener("click", this.paginationHandler.bind(this));
    this.films.addEventListener("click", this.queryBtn.bind(this));
  }
  cardList(arr, totalPages, pagev) {
    const template = cardLists(arr);

    this.container.innerHTML = template;
    document.getElementById("pagination").innerHTML = createPagination(
      totalPages,
      this.a
    );

    return (this.a = pagev);
  }
  genreHandler({ target }) {
    if (target.nodeName !== "OPTION") return;
    this.emite("genreSelect", target.value);
  }

  paginationHandler({ target }) {
    if (target.parentNode.classList.contains("page-item")) {
      document.getElementById("pagination").innerHTML = createPagination(
        this.a,
        target.textContent
      );
      this.emite("GO", target.textContent);
    }
    return (this.a = +target.textContent);
  }
  queryBtn({ target }) {
    this.a = 1;
    if (target.classList.contains("films-query-name")) {
      this.emite("GO", this.a, target.dataset.query);
    }
    return this.a;
  }
}
