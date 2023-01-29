import type { Pokemon } from "../types";
import Component from "./Component/Component";

class CardComponent extends Component {
  pokemon: Pokemon;
  constructor(
    parentElement: Element,
    pokemon: Pokemon,
    className: string,
    tag: string
  ) {
    super(parentElement, className, tag);
    this.pokemon = pokemon;
  }

  render(): void {
    super.render();
    this.element.innerHTML = `<img src=${this.pokemon.sprite.other["official-artwork"].front_default}/>
    <h3>${this.pokemon.name}</h3>
    <span>${this.pokemon.weight}</span> 
    `;
  }
}

export default CardComponent;
