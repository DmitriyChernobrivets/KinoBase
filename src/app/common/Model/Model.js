import { Promises } from "../../mvc/Promises";
export class Model extends Promises {
  constructor() {
    super();
    this.tempArray = null;
    this.localStorageKeys = Object.keys(localStorage);
    this.localStorageArray = localStorage.getItem("item")
      ? [...JSON.parse(localStorage.getItem("item"))]
      : [];
    this.errorObject = [
      {
        notFound: "Ничего не найдено"
      },
      {
        badRequest: "По вышему запросу ничего не найдено :("
      }
    ];
  }
  createLocalStorageFav(id, category) {
    const obj = this.getFilmsObjById(id);
    const alreadyExistedInStorage = this.localStorageArray.find(
      el => el.id === obj.id
    );
    obj.categorys = category;

    if (alreadyExistedInStorage) return;

    this.localStorageArray.push(obj);
    localStorage.setItem("item", JSON.stringify(this.localStorageArray));
  }
  deleteFromStorage(id) {
    const alreadyExistedInStorage = this.localStorageArray.find(
      el => el.id === +id
    );
    if (!alreadyExistedInStorage) return;
    this.localStorageArray = this.localStorageArray.filter(el => el.id !== +id);
    localStorage.setItem("item", JSON.stringify(this.localStorageArray));
  }
  getLocalItems() {
    const item = JSON.parse(localStorage.getItem("item"));

    return item;
  }
  getFilmsObjById(id) {
    return this.tempArray.find(el => el.id === +id);
  }

  getCardsFromStorage(arr) {
    return arr.filter(el =>
      this.localStorageArray.find(el2 => +el2.id === +el.dataset.id)
    );
  }
  drawStarsOnLoad(arr) {
    return arr.map(el =>
      el.firstElementChild.firstElementChild.classList.add("fav-selected")
    );
  }
  updateStars() {
    const cards = [...document.querySelectorAll(".card-list_item")];

    const resArr = this.getCardsFromStorage(cards);
    this.drawStarsOnLoad(resArr);
  }
}
