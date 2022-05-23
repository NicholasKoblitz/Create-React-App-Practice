import React from "react"
import "./PokeDex.css"
import PokeCard from "./PokeCard"

const PokeDex = ({pokemon}) => {

    const pokemons = pokemon.map(p => <PokeCard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />)

    return (
        <div id="pokedex">
            {pokemons}
        </div>
    )
}

export default PokeDex;