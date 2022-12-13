
class TitleApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
     this.innerHTML += `<h1>Selamat Datang di Referensi Film Dunia</h1> `;
  }
}

customElements.define("app-bar", TitleApp);
