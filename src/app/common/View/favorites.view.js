import { View } from "../../mvc/view";

export class FavoritesView extends View {
  constructor(template) {
    super(template);
    this.cardList = document.querySelector(".container");
    this.favoritsListBtn = document.querySelector(".js-favorites-list");

    this.cardList.addEventListener("click", this.favoritesId.bind(this));
    this.cardList.addEventListener("click", this.deleteFavCard.bind(this));
  }
  deleteFavCard({ target }) {
    if (!target.classList.contains("js-close-btn")) return;
    const item = target.closest("li");
    item.remove();
    this.emite("cardFavoritesId", item.dataset.id);
  }
  toogleFavStyle(target) {
    target.classList.toggle("fav-selected");
  }

  favoritesId({ target }) {
    if (!target.classList.contains("js-svg")) return;
    const id = target.closest("li").dataset.id;
    this.toogleFavStyle(target);
    this.emite("cardFavoritesId", id);
  }
}
