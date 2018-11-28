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

  filmsCardList(query, page) {
    this.model
      .filmsPromise(query, page)
      // .then(res => console.log(res.data))
      .then(({ data }) => {
        this.model.tempArray = data.results;

        this.view.render(data.results);
        this.model.updateStars();
      })
      .catch(err => console.log(err));
  }
  tvCardList(query, page) {
    this.model
      .SeriasPromise(query, page)
      // .then(res => console.log(res.data))
      .then(({ data }) => {
        this.model.tempArray = data.results;
        this.view.render(data.results);
        this.model.updateStars();
      })
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
      .then(({ data }) => {
        if (data.results.length === 0) {
          this.view.render(this.model.errorObject);
        } else {
          this.model.tempArray = data.results;
          this.view.render(data.results);
          this.model.updateStars();
        }
      })
      .catch(err => console.log(err));
  }
}
