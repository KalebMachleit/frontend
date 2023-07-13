import React from "react";
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'




const Pokemon = () => {
    const currentUrl = window.location.href
    const backendUrl = currentUrl.replace("3000", "8080")
    const [data, setItems] = useState([])

    useEffect (() => {
    fetch(backendUrl)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
      setItems(data)
      })
  }, []);
    return (
        <div>
            <p>Name: {data.name}</p>
            <p>Type: {data.type}</p>
            <p>HP: {data.hp}</p>
            <p>Attack: {data.attack}</p>
            <p>Defense: {data.defense}</p>
            <p>Speed: {data.speed}</p>
            <p>Ability1: {data.ability1}</p>
            <p>Ability2: {data.ability2}</p>
            <Link to={'/all'}>Back to Home</Link>
        </div>
    );
};

//             "name": data.species.name,
//             "type": data.types[0].type.name,
//             "image": data.sprites.front_default,
//             "hp": data.stats[0].base_stat,
//             "attack": data.stats[1].base_stat,
//             "defense": data.stats[2].base_stat,
//             "speed": data.stats[5].base_stat,
//             "ability1": data.abilities[0].ability.name,
//             "ability2": data.abilities[1].ability.name
 
export default Pokemon;