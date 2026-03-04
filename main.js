import './user-profile-card.js';
import './navigation.js';

class SimpleGreeting extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');
    const text = document.createElement('p');
    text.textContent = `Hello, ${this.getAttribute('name') || 'World'}!`;
    const style = document.createElement('style');
    style.textContent = `
      .wrapper {
        padding: 15px;
        border-radius: 8px;
        background: linear-gradient(45deg, var(--primary-color, #6a11cb), var(--secondary-color, #2575fc));
        color: var(--text-color, #ffffff);
        font-size: 1.5rem;
        font-weight: 600;
        box-shadow: 0 5px 15px var(--shadow-color, rgba(0, 0, 0, 0.2));
      }
    `;
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(text);
  }
}

customElements.define('simple-greeting', SimpleGreeting);
