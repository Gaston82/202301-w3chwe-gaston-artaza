export interface Pokemon {
  Id: number;
  sprite: { other: { "official-artwork": { front_default: string } } };
  name: string;
  weight: number;
}
