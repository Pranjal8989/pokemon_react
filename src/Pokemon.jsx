import { useEffect } from "react";
import "./index.css";
import { useState } from "react";
import { PokemonCard } from "./Pokemoncard";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon/?limit=600";
  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const detailedPokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
      });
      const detaileresponse = await Promise.all(detailedPokemonData);
      setPokemon(detaileresponse);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  // if (loading) {
  //   return (
  //     <div className="cards">
  //       {Array.from({ length: 4 }).map((_, index) => (
  //         <div key={index} className="skeleton-card"></div>
  //       ))}
  //     </div>
  //   );
  // }

  if (error) {
    return (
      <div>
        <h1>Error : {error.message}</h1>
      </div>
    );
  }

  // search Filter
  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="container">
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <ul className="cards">
            {loading
              ? Array.from({ length: 24 }).map((_, index) => (
                  <li key={index} className="skeleton-card"></li>
                ))
              : searchData.map((curPokemon) => (
                  <PokemonCard key={curPokemon.id} Pokemondata={curPokemon} />
                ))}
          </ul>
        </div>
      </section>
    </>
  );
};
