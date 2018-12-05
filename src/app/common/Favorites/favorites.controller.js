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
  }
}

function ifFavoritesEmpty() {
  const favoritesList = document.querySelectorAll(".fav-item");
  if (
    favoritesList.length === 0 &&
    this.view.favoriteBtn.classList.contains("top-nav-open")
  ) {
    this.view.render(this.model.errorObject);
  }
}
