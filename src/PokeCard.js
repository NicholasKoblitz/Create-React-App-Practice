import React from "react";
import "./PokeCard.css"
const PokeCard = ({id, name , type, base_experience}) => {

    const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    return (
        <div className="pokecard">
            <h3>{name}</h3>
            <img src={pokeImg} alt={name}/>
            <p>Type: {type}</p>
            <p>Base EXP: {base_experience}</p>
        </div>
    )
}

export default PokeCard;