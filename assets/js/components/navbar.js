class CustomNavbar extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById('navbar-template');
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));

    this.setActiveLink(shadow);
  }

  setActiveLink(shadowRoot) {
    const links = shadowRoot.querySelectorAll('.nav-link');
    const path = window.location.pathname;

    links.forEach(link => {
      const match = link.dataset.path;
      if (
        (match === '/' && path === '/') ||
        (match !== '/' && path.includes(match))
      ) {
        link.classList.add('active');
      }
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
