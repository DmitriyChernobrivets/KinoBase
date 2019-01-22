export class CardController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.view.eventOn("cardEnterFilms", this.onCardClickFilms.bind(this));
    this.view.eventOn("cardEnterTV", this.onCardClickTV.bind(this));
  }
  onCardClickFilms(id) {
    this.model
      .cardFilmsPromise(id)
      .then(res => {
        this.view.hidePagination();
        this.view.render(res[1].data);
        this.view.trailerFrameDraw(res[0].data.results[0]);
        this.view.cardSlidersAppend(res[2].data, res[3].data);
      })
      .catch(err => console.log(err));
  }
  onCardClickTV(id) {
    this.model
      .cardTVPromise(id)
      .then(res => {
        this.view.hidePagination();
        this.view.render(res[1].data);
        this.view.trailerFrameDraw(res[0].data.results[0]);
        this.view.cardSlidersAppend(res[2].data, res[3].data);
      })
      .catch(err => console.log(err));
  }
}
