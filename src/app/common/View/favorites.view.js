import { View } from "../../mvc/view";

export class FavoritesView extends View {
  constructor(template) {
    super(template);
    this.cardList = document.querySelector(".container");
    this.favoriteBtn = document.querySelector(".favorites");
    this.cardList.addEventListener(
      "click",
      this.favoritesOnStarClickId.bind(this)
    );
    this.cardList.addEventListener("click", this.deleteFavCard.bind(this));
    document.addEventListener("click", this.openFavorites.bind(this));
  }

  openFavorites({ target }) {
    if (!target.classList.contains("js-favorites-list")) return;

    this.eventEmite("openFavoritesList");
  }
  deleteFavCard({ target }) {
    if (!target.classList.contains("js-close-btn")) return;
    const item = target.closest("li");
    item.remove();
    this.eventEmite("cardFavoritesDelete", item.dataset.id);
  }
  toogleFavStyle(target) {
    target.classList.toggle("fav-selected");
  }

  favoritesOnStarClickId({ target }) {
    if (!target.classList.contains("js-svg")) return;
    const category = document.querySelector(".top-nav-open");
    const currentCategory = category.dataset.category;
    const id = target.closest("li").dataset.id;

    this.toogleFavStyle(target);
    if (!target.classList.contains("fav-selected")) {
      this.eventEmite("cardFavoritesDelete", id, currentCategory);
    } else this.eventEmite("cardFavoritesAdd", id, currentCategory);
  }
}
