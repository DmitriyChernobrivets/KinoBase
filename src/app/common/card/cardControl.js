export default class ControlerCard {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.view.container.addEventListener(
      "click",
      this.view.cardClickEvent.bind(this.view)
    );
    this.view.on("cardEnter", this.onCardClick.bind(this));
  }
  onCardClick(id) {
    this.model
      .cardPromise(id)
      .then(res => {
        // console.log(res[2], res[3]);
        this.view.card(res[1].data);
        this.view.trailerFrameDraw(res[0].data.results[0]);
        this.view.cardSlidersAppend(res[2].data, res[3].data);
        // this.view.movieImagesSliderCreate(res[3].data);
      })
      .catch(err => console.log(err));
  }
  //   genreFilter(genre_id) {
  //     this.model
  //       .genres(genre_id)
  //       .then(({ data }) => this.view.cardList(data.results));
  //   }
}
