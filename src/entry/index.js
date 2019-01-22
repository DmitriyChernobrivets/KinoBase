import "../scss/styles.scss";
import img from "../images/star.svg";
import bodyTemplate from "../templates/body.hbs";
import cardListTemplate from "../templates/cardList.hbs";
import cardFilms from "../templates/cardFilms.hbs";
import { Model } from "../app/common/Model/Model";
import { CardListView } from "../app/common/Card-List/cardList.view";
import { CardListController } from "../app/common/Card-List/cardList.controller";
import { CardView } from "../app/common/Card/card.view";
import { CardController } from "../app/common/Card/card.controller";
import { Navigation } from "../app/common/navigation/navigation";
import { FavoritesView } from "../app/common/Favorites/favorites.view";
import { FavoritesController } from "../app/common/Favorites/favorites.controller";
import favorites from "../templates/favorites-list.hbs";

setTimeout(() => {
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
}, 3000);
