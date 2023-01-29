import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import PageComponent from "./components/PageComponent/PageComponent.js";
import { getPokemons } from "./services/index.js";

const header = new HeaderComponent(document.querySelector(".root"), "Pokemon");
header.render();

(async () => {
  const pokemons = await getPokemons(150);
  const main = new PageComponent(document.querySelector(".root"), pokemons);
  main.render();
})();
