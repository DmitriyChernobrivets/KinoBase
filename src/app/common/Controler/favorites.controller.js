// import { Controller } from "../../mvc/controller";

export class FavoritesController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.view.on("cardFavoritesId", this.putLocalStorage.bind(this));
    this.view.favoritsListBtn.addEventListener(
      "click",
      this.drawFavList.bind(this)
    );
  }
  drawFavList() {
    const arr = this.model.getLocalItems();
    this.view.render(arr);
  }
  putLocalStorage(id) {
    this.model.createLocalStorageFav(id);
  }
}
