// import { Controller } from "../../mvc/controller";
// import { cardView } from "../View/card.view";
// import { model } from "../Model/Model";

export class CardController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    // super(view, model);

    this.view.on("cardEnterFilms", this.onCardClickFilms.bind(this));
    this.view.on("cardEnterTV", this.onCardClickTV.bind(this));
  }
  onCardClickFilms(id) {
    this.model
      .cardFilmsPromise(id)
      .then(res => {
        // console.log(res);

        this.view.render(res[1].data);
        this.view.trailerFrameDraw(res[0].data.results[0]);
        this.view.cardSlidersAppend(res[2].data, res[3].data);
        // this.view.movieImagesSliderCreate(res[3].data);
      })
      .catch(err => console.log(err));
  }
  onCardClickTV(id) {
    this.model
      .cardTVPromise(id)
      .then(res => {
        // console.log(res[2], res[3]);

        this.view.render(res[1].data);
        this.view.trailerFrameDraw(res[0].data.results[0]);
        this.view.cardSlidersAppend(res[2].data, res[3].data);
        // this.view.movieImagesSliderCreate(res[3].data);
      })
      .catch(err => console.log(err));
  }
}
