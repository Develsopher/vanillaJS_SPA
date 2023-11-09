import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.postId = params.id;
    this.setTitle('Viewing Post');
  }

  async getHtml() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${this.postId}`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const post = await response.json();
      return `
        <h1>${post.title}</h1><sapn>written by ${post.userId}</sapn>
        <p>${post.body}</p>
      `;
    } catch (error) {}
    return `<div><p>Error loading posts. Please try again later.</p></div>`;
  }
}
