const navTemplate = document.createElement('template');
navTemplate.innerHTML = `
  <style>
    :host {
        display: block;
        width: 100%;
        background: linear-gradient(90deg, var(--primary-color, #6a11cb), var(--secondary-color, #2575fc));
        box-shadow: 0 4px 12px var(--shadow-color, rgba(0, 0, 0, 0.15));
        padding: 1rem 2rem;
        border-radius: 0 0 12px 12px;
        margin-bottom: 2rem;
        box-sizing: border-box;
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo a {
      color: var(--text-color, #ffffff);
      text-decoration: none;
      font-size: 1.8rem;
      font-weight: 700;
    }
    .nav-links a {
      color: var(--text-color, #ffffff);
      text-decoration: none;
      margin-left: 1.5rem;
      font-size: 1.1rem;
      font-weight: 400;
      transition: opacity 0.3s ease;
    }
    .nav-links a:hover {
      opacity: 0.8;
    }
  </style>
  <nav>
    <div class="logo">
      <a href="/">Showcase</a>
    </div>
    <div class="nav-links">
      <a href="/">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
`;

class MainNavigation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(navTemplate.content.cloneNode(true));
  }
}

customElements.define('main-navigation', MainNavigation);
