import { createElement } from '../lib/dom'

export default function LocationsPage() {
  const el = createElement(
    'section',
    { className: 'LocationsPage' },
    createElement('h1', null, 'Locations')
  )

  return el
}
