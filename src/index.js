import Card from './components/Card'
import { getBySelector } from './lib/dom'
import './styles/index.css'

const url = 'https://rickandmortyapi.com/api/character'

fetch(url)
  .then(res => res.json())
  .then(data => renderCards(data.results))

function renderCards(characters) {
  const container = getBySelector('#cards-container')
  characters.forEach(({ image, name, status, species, location, episode }) => {
    const card = Card({
      image,
      name,
      status,
      species,
      location: location.name,
      firstSeenInUrl: episode[0],
      // firstMovie: episode[1].name,
    })
    container.append(card)
  })
}
