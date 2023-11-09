import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Home');
    this.setNavActivate('home');
  }

  async getHtml() {
    return `
        <h1>Hello 😀 This is Home</h1>
        <p>
          This project is building a single page application with vanilla JavaScript.
        </p>
        <p>
            <a href="/posts" data-link>View recent posts</a>.
        </p>
    `;
  }
}
