import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Posts');
    this.setNavActivate('posts');
  }

  async getHtml() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=5',
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const posts = await response.json();

      return `
        <h1>Posts</h1>
        <ul id="post-list">
        ${posts
          .map(
            (post) => `
        <div class="post">
          <a href="posts/${post.id}" data-link>${post.title}</a>
          <p><strong>ID:</strong> ${post.id}</p>
          <p><strong>User ID:</strong> ${post.userId}</p>
        </div>
      `,
          )
          .join('')}
        </ul>
      `;
    } catch (error) {
      console.error('Error:', error);
      return `<div><p>Error loading posts. Please try again later.</p></div>`;
    }
  }
}
