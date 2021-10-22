import Card from '../components/Card'
import { createElement } from '../lib/dom'
import './CharactersPage.css'

export default function CharactersPage() {
  const el = createElement(
    'section',
    { className: 'CharactersPage' },
    createElement('h1', null, 'Characters')
  )

  fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(data => addCharacters(data.results))

  function addCharacters(characters) {
    characters.forEach(({ name, image, location }) => {
      el.append(Card({ name, image, location: location.name }))
    })
  }

  return el
}
