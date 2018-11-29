// import { Controller } from "../../mvc/controller";

export class FavoritesController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.view.on("cardFavoritesAdd", this.putLocalStorage.bind(this));
    this.view.on("cardFavoritesDelete", this.deleteFavorites.bind(this));
    this.view.on("openFavoritesList", this.drawFavList.bind(this));
  }
  deleteFavorites(id) {
    this.model.deleteFromStorage(id);
  }
  drawFavList() {
    const arr = this.model.getLocalItems();
    this.view.hidePagination();
    arr.length !== 0
      ? this.view.render(arr)
      : this.view.render(this.model.errorObject);
  }
  putLocalStorage(id, category) {
    this.model.createLocalStorageFav(id, category);
  }
}
