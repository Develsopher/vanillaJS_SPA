export default class {
  constructor(params) {
    this.params = params;
  }

  setTitle(title) {
    document.title = title;
  }

  setNavActivate(target) {
    document.querySelectorAll('.nav__link').forEach((nav) => {
      nav.classList.remove('active');
    });
    document.querySelector(`.${target}`).classList.add('active');
  }

  async getHtml() {
    return '';
  }
}
