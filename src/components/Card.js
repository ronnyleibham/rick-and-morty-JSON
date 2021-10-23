import { createElement } from '../lib/dom.js'
import './Card.css'

// destructuring assignment

export default function Card({ name, type, weight, height, level, img }) {
  const el = createElement('section', {
    className: 'Card',
    innerHTML: `
        <img class="Card__image" src="${img}" alt="" />
        <h2>${name}</h2>
        <dl>
          <dt>Type:</dt>
          <dd>${type}</dd>
          <dt>Height:</dt>
          <dd>${height}m</dd>
          <dt>Level:</dt>
          <dd>${level}</dd>
          <dt>weight:</dt>
          <dd>${weight}Kg</dd>
        </dl>
    `,
  })

  return el
}
