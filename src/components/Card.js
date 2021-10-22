import { createElement } from '../lib/dom.js'
import './Card.css'

// destructuring assignment

export default function Card({ name, type }) {
  const el = createElement('section', {
    className: 'Card',
    innerHTML: `
        <img class="Card__image" src="" alt="" />
        <h2>${name}</h2>
        <span>Type = ${type} </span>
        <dl>
          <dt>Last known location:</dt>
          <dd></dd>
          <dt>First seen in:</dt>
          <dd>Rixty Minutes</dd>
          <dd></dd>
        </dl>
    `,
  })

  return el
}
