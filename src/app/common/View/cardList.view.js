// import cardListTemplate from "../../../templates/cardList.hbs";
import { View } from "../../mvc/view";

export class CardListView extends View {
  constructor(config) {
    super(config);
    this.filmsBtn = document.querySelector(".js-top-films-btn");
  }
}
