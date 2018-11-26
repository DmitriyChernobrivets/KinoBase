export class Navigation {
  constructor() {
    this.menu = document.querySelector(".aside-menu");
    this.overlay = document.querySelector(".menu-overlay");
    this.btnOpen = document.querySelector(".js-menu-btn");
    this.topNav = document.querySelectorAll(".top-nav-menu_list > li a");
    this.topNavList = document.querySelector(".top-nav-menu_list");
    this.topNavList.addEventListener(
      "click",
      this.topNavSelectionByClick.bind(this)
    );
    document.body.addEventListener("click", this.closeMenu.bind(this));
    this.btnOpen.addEventListener("click", this.openMenu.bind(this));
    document.body.addEventListener(
      "click",
      this.topNavSelectionByAsidemenuClick.bind(this)
    );
  }
  closeMenu({ target }) {
    if (
      target.classList.contains("overlay-open") ||
      target.classList.contains("js-menu-close")
    ) {
      this.menu.classList.remove("menu-open");
      this.overlay.classList.remove("overlay-open");
    }
  }
  openMenu(e) {
    e.preventDefault();
    this.menu.classList.add("menu-open");
    this.overlay.classList.add("overlay-open");
  }
  topNavSelectionByClick({ target }) {
    if (!target.classList.contains("top-menu-link")) return;
    this.topNav.forEach(el => el.classList.remove("top-nav-open"));
    target.classList.add("top-nav-open");
  }
  topNavSelectionByAsidemenuClick({ target }) {
    if (target.classList.contains("TV")) {
      currentNavPosition.call(this, "TV");
    } else if (target.classList.contains("film")) {
      currentNavPosition.call(this, "film");
    }
  }
}

function currentNavPosition(string) {
  this.topNav.forEach(el => {
    el.classList.remove("top-nav-open");
    if (el.classList.contains(string)) {
      el.classList.add("top-nav-open");
    }
  });
}
