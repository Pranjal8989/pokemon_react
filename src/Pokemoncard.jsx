export const PokemonCard = ({ Pokemondata }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={Pokemondata.sprites.other.dream_world.front_default}
          alt={Pokemondata.name}
          className="pokemon-image"
        />
      </figure>
      <h1>{Pokemondata.name}</h1>

      <div className="pokemon-info pokemon-highlight">
        <p>
          {Pokemondata.types.map((curType) => curType.type.name).join(", ")}
        </p>
      </div>
      <div className="grid-three-cols">
        <p className="pokemon-info">
          Height : <span>{Pokemondata.height}</span>
        </p>
        <p className="pokemon-info">
          Weight : <span>{Pokemondata.weight}</span>
        </p>
        <p className="pokemon-info">
          Speed : <span>{Pokemondata.stats[5].base_stat}</span>
        </p>
      </div>
      <div className="grid-three-cols">
        <p className="pokemon-info">
          {Pokemondata.base_experience} : <span>Experience</span>
        </p>
        <p className="pokemon-info">
          {Pokemondata.stats[1].base_stat} : <span>Attact</span>
        </p>
        <p className="pokemon-info">
          {Pokemondata.abilities
            .map((abilitiesinfo) => abilitiesinfo.ability.name)
            .slice(0, 1)
            .join(", ")}
          : <span>Abilities</span>
        </p>
      </div>
    </li>
  );
};
