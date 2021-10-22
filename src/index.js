import Card from './components/Card.js'
import { getBySelector } from './lib/dom'
import './styles/index.css'

const url = 'https://pokeapi.co/api/v2/pokemon/?limit=10'

fetch(url)
  .then(res => res.json())
  .then(data => {
    data.results.forEach(({ url }) => {
      fetch(url)
        .then(res => res.json())
        .then(pokemon => renderCards(pokemon))
    })
  })

function renderCards(data) {
  const container = getBySelector('#cards-container')
  const card = Card({
    name: data.name,
    type: data.types[0].type.name,
  })
  console.log(data.name, data.types[0].type.name)
  container.append(card)
}
