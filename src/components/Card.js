import { createElement } from '../lib/dom.js'
import './Card.css'

// destructuring assignment

export default function Card({ name, type, weight, height, level, img }) {
  const el = createElement('section', {
    className: 'Card',
    innerHTML: `
        <img class="Card__image" src="${img}" alt="" />
        <h2>${name}</h2>
        <h3>${level}</h3>
        <p>Level</p>
        <dl>
          <dt>Type:</dt>
          <dd>${type}</dd>
          <dt>Height:</dt>
          <dd>${height / 10} m</dd>
          <dt>weight:</dt>
          <dd>${weight / 10} kg</dd>
        </dl>
    `,
  })

  return el
}
