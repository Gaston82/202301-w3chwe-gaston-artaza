import type { Pokemon } from "../../types/index.js";
import Component from "../Component/Component.js";

class PageComponent extends Component {
  pokemons: Pokemon[];
  constructor(parentElement: Element, pokemons: Pokemon[]) {
    super(parentElement, "container", "main");
    this.pokemons = pokemons;
  }

  render() {
    super.render();

    this.element.innerHTML = `<section><ul>${this.pokemons
      .map((pokemon) => `<li></li>`)
      .join("")}</ul></section>`;
  }
}

export default PageComponent;
