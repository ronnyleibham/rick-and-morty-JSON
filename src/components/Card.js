import { createElement } from '../lib/dom.js'
import './Card.css'

// destructuring assignment

export default function Card({ image, name, location }) {
  const el = createElement('section', {
    className: 'Card',
    innerHTML: `
        <img class="Card__image" src="${image}" alt="" />
        <h2>${name}</h2>
        <span>Alive and Race</span>
        <dl>
          <dt>Last known location:</dt>
          <dd>${location}</dd>
          <dt>First seen in:</dt>
          <dd>Rixty Minutes</dd>
        </dl>
    `,
  })

  return el
}
