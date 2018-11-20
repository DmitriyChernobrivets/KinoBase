import { Controller } from "../../mvc/controller";
// import { cardView } from "../View/card.view";
// import { model } from "../Model/Model";

export class CardController extends Controller {
  constructor(view, model) {
    super(view, model);

    this.view.on("cardEnter", this.onCardClick.bind(this));
  }
  onCardClick(id) {
    this.model
      .cardPromise(id)
      .then(res => {
        // console.log(res[2], res[3]);
        // console.log(res);
        this.view.render(res[1].data);
        this.view.trailerFrameDraw(res[0].data.results[0]);
        this.view.cardSlidersAppend(res[2].data, res[3].data);
        // this.view.movieImagesSliderCreate(res[3].data);
      })
      .catch(err => console.log(err));
  }
}
