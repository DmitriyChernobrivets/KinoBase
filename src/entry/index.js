import "../scss/styles.scss";
import bodyTemplate from "../templates/body.hbs";
import cardListTemplate from "../templates/cardList.hbs";
import card from "../templates/card.hbs";
import { Model } from "../app/common/Model/Model";
import { CardListView } from "../app/common/View/cardList.view";
import { CardListController } from "../app/common/Controler/cardList.controller";
import { CardView } from "../app/common/View/card.view";
import { CardController } from "../app/common/Controler/card.controller";
import { AsideMenu } from "../app/common/aside-menu/aside-menu";

const bodyMarkup = bodyTemplate();
document.body.innerHTML = bodyMarkup;

const model = new Model();
const cardListView = new CardListView({
  selector: ".container",
  template: cardListTemplate
});
const cardView = new CardView({
  selector: ".container",
  template: card
});
new CardListController(cardListView, model);
new CardController(cardView, model);
new AsideMenu();
