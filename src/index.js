import Navigation from './components/Navigation'
import { createElement, getBySelector } from './lib/dom'
import CharactersPage from './pages/CharactersPage'
import LocationsPage from './pages/LocationsPage'
import './styles/index.css'

const charactersPage = CharactersPage()
const locationsPage = LocationsPage()

const app = createElement(
  'main',
  null,
  Navigation({ onClick: handleClick }),
  charactersPage,
  locationsPage
)

getBySelector('#app').append(app)

function handleClick(route) {
  charactersPage.classList.toggle('hidden', route !== 'characters')
  locationsPage.classList.toggle('hidden', route !== 'locations')
}
