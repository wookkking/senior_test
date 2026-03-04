const switcherTemplate = document.createElement('template');
switcherTemplate.innerHTML = `
  <style>
    :host {
        display: inline-block;
    }
    button {
        background: none;
        border: 1px solid var(--text-color, #ffffff);
        color: var(--text-color, #ffffff);
        border-radius: 20px;
        padding: 8px 16px;
        cursor: pointer;
        font-size: 0.9rem;
        transition: all 0.3s ease;
    }
    button:hover {
        background: var(--text-color, #ffffff);
        color: var(--primary-color, #6a11cb);
    }
  </style>
  <button id="theme-toggle">Switch Theme</button>
`;

class ThemeSwitcher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(switcherTemplate.content.cloneNode(true));
    this.toggleButton = this.shadowRoot.getElementById('theme-toggle');
    
    this.currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', this.currentTheme);

    this.toggleButton.addEventListener('click', () => {
      this.currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', this.currentTheme);
      localStorage.setItem('theme', this.currentTheme);
      this.updateButtonText();
    });
    this.updateButtonText();
  }

  updateButtonText() {
    this.toggleButton.textContent = `Switch to ${this.currentTheme === 'dark' ? 'Light' : 'Dark'} Mode`;
  }
}

customElements.define('theme-switcher', ThemeSwitcher);
