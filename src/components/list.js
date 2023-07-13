import { useState, useEffect } from 'react'
import Card from './card'

function List() {
  const [items, setItems] = useState([])
  // const [list, setList] = useState([]) all sad and forgotten over here

  useEffect (() => {
    fetch("http://localhost:8080/pokemon/get-all")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
      setItems(data)
      })
  }, []);

  
  // async function getImage(name) {
  //   axios({
  //     method: 'get',
  //     url: `http://localhost:8080/pokemon/${name}`
  //   }).then(apiResponse => {
  //      // process the response
  //      const pokemonData = apiResponse.data
  //     //  console.log(pokemonData.image)
  //      return pokemonData.image
  //   })
  // }
  //this did not work

  return  (
      items.map((item) => <Card header={item.name}
        body= {
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${items.indexOf(item)}.png`
         }
        ></Card>)
  )
  
}

export default List;

