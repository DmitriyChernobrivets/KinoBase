import { Promises } from "../../mvc/Promises";
export class Model extends Promises {
  constructor() {
    super();
    this.tempArray = null;
    this.localStorageKeys = Object.keys(localStorage);
    this.favArr = [];
  }

  getLocalItems() {
    const item = JSON.parse(localStorage.getItem("item"));

    return item;
  }
  getFilmsObjById(id) {
    return this.tempArray.find(el => el.id === +id);
  }
  toogleObjInStorage(obj) {
    this.favArr.includes(obj)
      ? (this.favArr = this.favArr.filter(el => el.id !== obj.id))
      : this.favArr.push(obj);

    return this.favArr;
  }
  createLocalStorageFav(id) {
    const obj = this.getFilmsObjById(id);
    this.toogleObjInStorage(obj);
    localStorage.setItem("item", JSON.stringify(this.favArr));
  }
  // removeLocalFav(id) {
  //   localStorage.removeItem(id);
  // }
  // updateLocal() {
  //   return (this.localStorageKeys = [...Object.keys(localStorage)]);
  // }
}
