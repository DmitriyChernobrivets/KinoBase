export class CardListController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    document.addEventListener(
      "DOMContentLoaded",
      this.filmsCardList.bind(this, "now_playing")
    );
    this.view.eventOn("films", this.filmsCardList.bind(this));
    this.view.eventOn("TV", this.tvCardList.bind(this));
    this.view.eventOn("globalSearch", this.globalSearchList.bind(this));
  }

  filmsCardList(query, page) {
    this.model
      .filmsPromise(query, page)
      // .then(res => console.log(res.data))
      .then(({ data }) => {
        this.model.tempArray = data.results;

        this.view.hidePagination(true);

        this.view.render(data.results);
        this.model.updateStars();
      })
      .catch(error => console.log(error));
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
        }
      })
      .catch(err => console.log(err));
  }
}
