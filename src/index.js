import Card from './components/Card'
import { getBySelector } from './lib/dom'
import './styles/index.css'

const url = 'https://rickandmortyapi.com/api/character'

fetch(url)
  .then(res => res.json())
  .then(data => renderCards(data.results))

function renderCards(characters) {
  const container = getBySelector('#cards-container')
  characters.forEach(({ name, image, location }) => {
    const card = Card({
      name: name,
      image: image,
      location: location.name,
    })
    container.append(card)
  })
}
