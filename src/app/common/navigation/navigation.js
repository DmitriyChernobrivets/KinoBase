export class Navigation {
  constructor() {
    this.menuContainer = document.querySelector(".aside-menu");
    this.overlay = document.querySelector(".menu-overlay");
    this.btnOpen = document.querySelector(".js-menu-btn");
    this.topNavMenuLinks = document.querySelectorAll(
      ".top-nav-menu_list > li a"
    );
    this.topNavContainer = document.querySelector(".top-nav-menu_list");
    this.topNavContainer.addEventListener(
      "click",
      this.topNavSelectionByClick.bind(this)
    );
    document.body.addEventListener("click", this.closeAsideMenu.bind(this));
    this.btnOpen.addEventListener("click", this.openAsideMenu.bind(this));
    document.body.addEventListener("click", this.asidemenuClick.bind(this));
    this.menuContainer.addEventListener("click", this.openCategory.bind(this));
  }
  closeAsideMenu({ target }) {
    if (
      target.classList.contains("overlay-open") ||
      target.classList.contains("js-menu-close")
    ) {
      this.menuContainer.classList.remove("menu-open");
      this.overlay.classList.remove("overlay-open");
    }
  }
  openCategory({ target }) {
    if (!target.classList.contains("films-head")) return;
    target.nextElementSibling.classList.toggle("category-open");
  }
  openAsideMenu(e) {
    e.preventDefault();
    this.menuContainer.classList.add("menu-open");
    this.overlay.classList.add("overlay-open");
  }
  topNavSelectionByClick({ target }) {
    if (!target.classList.contains("top-menu-link")) return;
    this.topNavMenuLinks.forEach(el => el.classList.remove("top-nav-open"));
    target.classList.add("top-nav-open");
  }
  asidemenuClick({ target }) {
    const currentSubCategory = target.dataset.query;
    if (target.classList.contains("TV")) {
      currentTopNavPosition.call(this, "TV", currentSubCategory);
    } else if (target.classList.contains("film")) {
      currentTopNavPosition.call(this, "film", currentSubCategory);
    } else if (target.classList.contains("favorites")) {
      currentTopNavPosition.call(this, "favorites", null);
    }
  }
}

function currentTopNavPosition(category, subcategory) {
  this.topNavMenuLinks.forEach(el => {
    el.classList.remove("top-nav-open");
    if (el.classList.contains(category)) {
      el.classList.add("top-nav-open");
      el.dataset.query = subcategory;
    }
  });
}
