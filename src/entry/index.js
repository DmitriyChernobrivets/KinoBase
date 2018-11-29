import "../scss/styles.scss";
import img from "../images/star.svg";

import bodyTemplate from "../templates/body.hbs";
import cardListTemplate from "../templates/cardList.hbs";
import cardFilms from "../templates/cardFilms.hbs";
import { Model } from "../app/common/Model/Model";
import { CardListView } from "../app/common/View/cardList.view";
import { CardListController } from "../app/common/Controler/cardList.controller";
import { CardView } from "../app/common/View/card.view";
import { CardController } from "../app/common/Controler/card.controller";
import { Navigation } from "../app/common/navigation/navigation";
import { FavoritesView } from "../app/common/View/favorites.view";
import { FavoritesController } from "../app/common/Controler/favorites.controller";
import favorites from "../templates/favorites-list.hbs";

const bodyMarkup = bodyTemplate();
document.body.innerHTML = bodyMarkup;

const model = new Model();
const cardListView = new CardListView(cardListTemplate);
const cardView = new CardView(cardFilms);
const favoritesView = new FavoritesView(favorites);
new CardListController(cardListView, model);
new CardController(cardView, model);
new Navigation();
new FavoritesController(favoritesView, model);
