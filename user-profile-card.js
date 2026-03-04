const cardTemplate = document.createElement('template');
cardTemplate.innerHTML = `
  <style>
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    .card {
      background-color: var(--card-bg-color, #ffffff);
      border-radius: 12px;
      box-shadow: 0 10px 30px var(--shadow-color, rgba(0, 0, 0, 0.1));
      overflow: hidden;
      transition: transform 0.3s, box-shadow 0.3s;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px var(--shadow-color, rgba(0, 0, 0, 0.15));
    }
    .card-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .card-content {
      padding: 1.5rem;
      flex-grow: 1;
    }
    .card-content h3 {
      margin: 0 0 0.5rem;
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-color, #333);
    }
    .card-content p {
      margin: 0;
      color: var(--text-color, #555);
      font-size: 1rem;
      line-height: 1.5;
    }
    ::slotted(img) {
        display: none; /* Hide slotted images by default */
    }
  </style>
  <div class="card">
    <img id="profile-image" class="card-image" src="" alt="User Profile Image">
    <div class="card-content">
      <h3 id="profile-name"></h3>
      <p id="profile-title"></p>
    </div>
  </div>
`;

class UserProfileCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        this.updateCard();
    }

    static get observedAttributes() {
        return ['user-id'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'user-id') {
            this.updateCard();
        }
    }

    updateCard() {
        const userId = this.getAttribute('user-id');
        // In a real app, you'd fetch data based on userId.
        // Here, we'll use hardcoded data for demonstration.
        const users = {
            '1': { name: 'Alex Doe', title: 'Software Engineer', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop' },
            '2': { name: 'Jane Smith', title: 'Product Designer', image: 'https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?q=80&w=2080&auto=format&fit=crop' },
            '3': { name: 'Samuel Green', title: 'Data Scientist', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop' },
        };

        const userData = users[userId] || { name: 'Unknown', title: 'Unknown', image: '' };

        this.shadowRoot.querySelector('#profile-name').textContent = userData.name;
        this.shadowRoot.querySelector('#profile-title').textContent = userData.title;
        this.shadowRoot.querySelector('#profile-image').src = userData.image;
    }
}

customElements.define('user-profile-card', UserProfileCard);
