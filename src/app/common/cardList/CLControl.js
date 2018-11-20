export default class ControlerCardList {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    // document.addEventListener("DOMContentLoaded", this.latest.bind(this));
    // this.view.select.addEventListener(
    //   "click",
    //   this.view.genreHandler.bind(this.view)
    // );
    // this.view.on("genreSelect", this.genreFilter.bind(this));
    // this.view.btnMovies.addEventListener("click", this.latest.bind(this));

    // this.view.btnTopRated.addEventListener("click", this.topRate.bind(this));
    // this.view.btnLatest.addEventListener("click", this.latest.bind(this));
    // this.view.on("GO", this.latest.bind(this));
  }
  latest(pagev = 1, query = "now_playing") {
    this.model
      .latestPromise(pagev, query)
      // .then(res => console.log(res))
      .then(({ data }) =>
        this.view.cardList(data.results, data.total_pages, pagev)
      )
      .catch(err => console.log(err));
  }

  topRate() {
    this.model
      .topRatedPromise()
      .then(({ data }) => this.view.cardList(data.results))
      .catch(err => console.log(err));
  }
  upComing() {
    this.model
      .upComingPromise()
      .then(({ data }) => this.view.cardList(data.results))
      .catch(err => console.log(err));
  }
  genreFilter(genre_id) {
    this.model
      .genres(genre_id)
      .then(({ data }) => this.view.cardList(data.results));
  }
}
