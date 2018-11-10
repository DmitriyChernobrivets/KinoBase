export default class Presenter {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    document.addEventListener("DOMContentLoaded", this.latest.bind(this));
    this.view.btnMovies.addEventListener("click", this.upComing.bind(this));
    // this.view.btnSeries.addEventListener("click", this.serials.bind(this));
    this.view.btnTopRated.addEventListener("click", this.topRate.bind(this));
    this.view.btnLatest.addEventListener("click", this.latest.bind(this));
    this.view.container.addEventListener(
      "click",
      this.view.cardClickEvent.bind(this.view)
    );
    this.view.select.addEventListener(
      "click",
      this.view.genreHandler.bind(this.view)
    );
    this.view.on("cardEnter", this.onCardClick.bind(this));
    this.view.on("genreSelect", this.genreFilter.bind(this));
  }
  latest() {
    this.model
      .latestPromise()
      .then(({ data }) => this.view.cardList(data.results))
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
  // serials() {
  //   this.model
  //     .serialsPromise()
  //     .then(({ data }) => this.view.cardList(data.results))
  //     .catch(err => console.log(err));
  // }
  onCardClick(id) {
    this.model
      .cardPromise(id)
      .then(res => {
        // console.log(res[2], res[3]);
        this.view.card(res[1].data);
        this.view.trailerFrameDraw(res[0].data.results[0]);
        this.view.cardSlidersAppend(res[2].data, res[3].data);
        // this.view.movieImagesSlider(res[3].data);
      })
      .catch(err => console.log(err));
  }
  genreFilter(genre_id) {
    this.model
      .genres(genre_id)
      .then(({ data }) => this.view.cardList(data.results));
  }
}
