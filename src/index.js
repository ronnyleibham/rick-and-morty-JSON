import { getBySelector } from './lib/dom'
import './styles/index.css'

const url = 'https://rickandmortyapi.com/api/character'

fetch(url)
  .then(res => res.json())
  .then(data => renderCards(data.results))

function renderCards(characters) {
  characters.forEach(character => {
    const container = getBySelector('#cards-container')
    container.innerHTML = container.innerHTML + `<div>${character.name}</div>`
  })
}
