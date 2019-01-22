import { ifFavoritesEmpty } from "../../helpers/helpers.functions";
import { updateFavNode } from "../../helpers/helpers.functions";

export class FavoritesController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.view.eventOn("cardFavoritesAdd", this.putLocalStorage.bind(this));
    this.view.eventOn("cardFavoritesDelete", this.deleteFavorites.bind(this));
    this.view.eventOn("openFavoritesList", this.drawFavList.bind(this));
  }
  deleteFavorites(id) {
    ifFavoritesEmpty.call(this);
    this.model.deleteFromStorage(id);
    this.view.showFavModal("DELETED");
    updateFavNode(this.model.favCounter);
  }
  drawFavList() {
    const arr = this.model.localStorageArray;
    this.view.hidePagination();
    arr.length !== 0
      ? this.view.render(arr)
      : this.view.render(this.model.errorObject);
  }
  putLocalStorage(id, category) {
    this.model.createLocalStorageFav(id, category);
    this.view.showFavModal("ADDED");
    updateFavNode(this.model.favCounter);
  }
}
