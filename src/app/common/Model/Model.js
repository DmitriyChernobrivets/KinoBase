import { Promises } from "../extends/Promises";
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
        notFound: "Закладки пусты"
      },
      {
        badRequest: "По вышему запросу ничего не найдено :("
      },
      {
        NetworkError: "Network Error, Try again later"
      }
    ];
    this.favCounter = 0;
  }
  createLocalStorageFav(id, category) {
    const obj = this.getFilmsObjById(id);
    const alreadyExistedInStorage = this.findExistingIdInStorage(id, obj);
    if (alreadyExistedInStorage) return;
    this.favCounter = this.favCounter + 1;
    obj.categorys = category;
    this.localStorageArray.push(obj);
    this.setArrayInLocalStorage();
  }

  deleteFromStorage(id) {
    const alreadyExistedInStorage = this.findExistingIdInStorage(id, null);
    if (!alreadyExistedInStorage) return;
    this.favCounter = this.favCounter - 1;
    this.removeFromArray(id);
    this.setArrayInLocalStorage();
  }

  setArrayInLocalStorage() {
    localStorage.setItem("item", JSON.stringify(this.localStorageArray));
  }
  findExistingIdInStorage(id2, obj) {
    return this.localStorageArray.find(el => {
      if (!obj) {
        return el.id === +id2;
      } else return el.id === obj.id2;
    });
  }
  removeFromArray(id) {
    return (this.localStorageArray = this.localStorageArray.filter(
      el => el.id !== +id
    ));
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
    this.favCounter = this.localStorageArray.length;
  }
}
