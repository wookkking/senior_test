const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      font-family: var(--font-family, sans-serif);
    }

    .card {
      background-color: var(--card-bg-color, #ffffff);
      border-radius: 16px;
      box-shadow: 0 10px 30px var(--shadow-color, rgba(0, 0, 0, 0.1));
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      max-width: 320px;
      text-align: center;
      color: #333;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px var(--shadow-color, rgba(0, 0, 0, 0.15));
    }

    .avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 1.5rem;
      border: 4px solid var(--primary-color, #6a11cb);
    }

    .name {
      font-size: 1.75rem;
      font-weight: 700;
      margin: 0;
      background: linear-gradient(45deg, var(--primary-color, #6a11cb), var(--secondary-color, #2575fc));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .title {
      font-size: 1rem;
      font-weight: 300;
      color: #777;
      margin: 0.25rem 0 1rem;
    }

    .socials {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
  </style>
  <div class="card">
    <img class="avatar" src="" alt="User Avatar" />
    <h2 class="name"></h2>
    <p class="title"></p>
    <div class="description">
      <slot name="description"></slot>
    </div>
    <div class="socials">
        <slot name="socials"></slot>
    </div>
  </div>
`;

class UserProfileCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('.name').innerText = this.getAttribute('name') || 'Anonymous';
    this.shadowRoot.querySelector('.title').innerText = this.getAttribute('title') || 'No Title';
    this.shadowRoot.querySelector('.avatar').src = this.getAttribute('avatar') || 'https://i.pravatar.cc/150';
  }
}

customElements.define('user-profile-card', UserProfileCard);
