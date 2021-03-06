import { Services } from "../extends/Services";

export class FavoritesView extends Services {
  constructor(template) {
    super(template);
    this.cardList = document.querySelector(".container");
    this.favoriteBtn = document.querySelector(".favorites");

    document.addEventListener("click", this.openFavorites.bind(this));
    this.cardList.addEventListener(
      "click",
      this.favoritesOnStarClickId.bind(this)
    );

    this.cardList.addEventListener("click", this.deleteFavCard.bind(this));
    this.ismodalOpen = false;
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
    const currentBtn = document.querySelector(".top-nav-open");
    const currentCategory = currentBtn.dataset.category;
    const id = target.closest("li").dataset.id;
    this.toogleFavStyle(target);
    if (!target.classList.contains("fav-selected")) {
      this.eventEmite("cardFavoritesDelete", id, currentCategory);
    } else this.eventEmite("cardFavoritesAdd", id, currentCategory);
  }
  showFavModal(string) {
    if (this.ismodalOpen) return;
    this.ismodalOpen = true;
    const modalBlock = document.querySelector(".favModal");
    modalBlock.classList.add("show-modal");
    modalBlock.innerHTML = string;
    setTimeout(() => {
      modalBlock.classList.remove("show-modal");
      this.ismodalOpen = false;
    }, 2000);
  }
}
