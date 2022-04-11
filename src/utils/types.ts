type PokemonType = {
  name: string;
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  order: number;
  height: number;
  weight: number;
  types: [{
    slot: number;
    type: PokemonType[]
  }];
}
