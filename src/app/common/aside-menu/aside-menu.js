export class AsideMenu {
  constructor() {
    this.menu = document.querySelector(".aside-menu");
    this.overlay = document.querySelector(".menu-overlay");
    this.btnOpen = document.querySelector(".js-menu-btn");
    this.topNav = document.querySelectorAll(".top-nav-menu_list > li a");
    this.topNavList = document.querySelector(".top-nav-menu_list");
    this.topNavList.addEventListener("click", this.func.bind(this));
    document.body.addEventListener("click", this.closeMenu.bind(this));
    this.btnOpen.addEventListener("click", this.openMenu.bind(this));
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
  func({ target }) {
    if (!target.classList.contains("top-menu-link")) return;
    this.topNav.forEach(el => el.classList.remove("top-nav-open"));
    target.classList.add("top-nav-open");
  }
}
