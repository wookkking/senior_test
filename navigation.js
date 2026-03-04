const navigationTemplate = document.createElement('template');
navigationTemplate.innerHTML = `
  <style>
    nav {
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        padding: 1rem 2rem;
        box-shadow: 0 4px 12px var(--shadow-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo a {
        color: var(--text-color);
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 700;
    }
    .nav-links {
        display: flex;
        gap: 2rem;
        align-items: center;
    }
    .nav-links a {
        color: var(--text-color);
        text-decoration: none;
        font-size: 1.1rem;
        position: relative;
        padding-bottom: 5px;
        transition: color 0.3s;
    }
    .nav-links a::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: var(--text-color);
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.3s;
    }
    .nav-links a:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
  </style>
  <nav>
    <div class="logo">
      <a href="/">Web Showcase</a>
    </div>
    <div class="nav-links">
        <a href="/">Home</a>
        <theme-switcher></theme-switcher>
    </div>
  </nav>
`;

class MainNavigation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(navigationTemplate.content.cloneNode(true));
  }
}

customElements.define('main-navigation', MainNavigation);
