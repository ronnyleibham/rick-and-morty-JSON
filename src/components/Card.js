import { createElement } from '../lib/dom.js'
import './Card.css'
import Image from './Image.js'

// destructuring assignment

export default function Card({ name, image, location }) {
  const el = createElement(
    'section',
    {
      className: 'Card',
    },
    Image({ image: image }),
    createElement('h2', null, name),
    createElement('span', null, 'Alive and Race'),
    createElement(
      'dl',
      null,
      createElement('dt', null, 'Last known location:'),
      createElement('dd', null, location),
      createElement('dt', null, 'First seen in:'),
      createElement('dd', null, 'Rixty Minutes')
    )
  )

  return el
}
