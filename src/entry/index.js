import "../scss/styles.scss";
import bodyTmp from "../templates/body.hbs";
import Model from "../components/Model";
import View from "../components/View";
import Presenter from "../components/Presenter";

console.log(lory);
const body = document.querySelector(".entry");
const main = bodyTmp();
body.innerHTML = main;

// let simple = document.querySelector(".js_slider");

// lory(simple, {
//   infinite: 0
//   // slidesToScroll: 3
// });

const view = new View();
const model = new Model();
console.log(view);
new Presenter(view, model);
