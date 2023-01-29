import Component from "../Component/Component.js";

class HeaderComponent extends Component {
  title: string;
  constructor(parentElement: Element, title: string) {
    super(parentElement, "header", "header");
    this.title = title;
  }

  render(): void {
    super.render();
    this.element.innerHTML = `<h1>${this.title}</h1>`;
  }
}

export default HeaderComponent;
