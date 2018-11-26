// import { Controller } from "../../mvc/controller";
// import { cardListView } from "../View/cardList.view";
// import { model } from "../Model/Model";
// import { lory } from "../../../helpers/slider/lory.min.js";
export class CardListController {
  constructor(view, model) {
    // super(view, model);
    this.view = view;
    this.model = model;
    document.addEventListener(
      "DOMContentLoaded",
      this.filmsCardList.bind(this, "now_playing")
    );
    this.view.on("films", this.filmsCardList.bind(this));
    this.view.on("TV", this.tvCardList.bind(this));
    this.view.on("globalSearch", this.globalSearchList.bind(this));
  }

  filmsCardList(query) {
    this.model
      .filmsPromise(query)
      // .then(res => console.log(res.data))
      .then(({ data }) => {
        this.model.tempArray = data.results;

        this.view.render(data.results);
      })
      .catch(err => console.log(err));
  }
  tvCardList(query) {
    this.model
      .SeriasPromise(query)
      // .then(res => console.log(res.data))
      .then(({ data }) => this.view.render(data.results))
      .catch(err => console.log(err));
  }
  popularSeriasTv() {
    this.model
      .popularSeriasPromise()
      .then(({ data }) => this.view.render(data.results))
      .catch(err => console.log(err));
  }
  globalSearchList(query) {
    this.model
      .searchInputPromise(query)
      .then(({ data }) => this.view.render(data.results))
      .catch(err => console.log(err));
  }
}
