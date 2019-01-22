import { updateFavNode } from "../../helpers/helpers.functions";

export class CardListController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.filmsCardList("now_playing", 1);
    this.view.eventOn("films", this.filmsCardList.bind(this));
    this.view.eventOn("TV", this.tvCardList.bind(this));
    this.view.eventOn("globalSearch", this.globalSearchList.bind(this));
  }

  filmsCardList(query, page) {
    this.model
      .filmsPromise(query, page)
      .then(({ data }) => {
        this.model.tempArray = data.results;
        this.view.hidePagination(true);
        this.view.render(data.results);
        this.model.updateStars();
        updateFavNode(this.model.favCounter);
      })
      .catch(error => console.log(error));
  }
  tvCardList(query, page) {
    this.model
      .SeriasPromise(query, page)
      .then(({ data }) => {
        this.model.tempArray = data.results;
        this.view.hidePagination(true);
        this.view.render(data.results);
        this.model.updateStars();
        updateFavNode(this.model.favCounter);
      })
      .catch(err => console.log(err));
  }

  globalSearchList(query) {
    this.model
      .searchInputPromise(query)
      .then(({ data }) => {
        if (data.results.length === 0) {
          this.view.hidePagination();
          this.view.render(this.model.errorObject);
        } else {
          this.model.tempArray = data.results;
          this.view.hidePagination();
          this.view.render(data.results);
          this.model.updateStars();
          updateFavNode(this.model.favCounter);
        }
      })
      .catch(err => console.log(err));
  }
}
