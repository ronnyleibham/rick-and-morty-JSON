import { createElement, getByDataJs } from '../lib/dom.js'
import './Card.css'

// destructuring assignment

export default function Card({
  image,
  name,
  status,
  species,
  location,
  firstSeenInUrl,
}) {
  const el = createElement('section', {
    className: 'Card',
    innerHTML: `
    <img class="Card__image" src="${image}" alt="" />
    <div><h2 class="Card__heading">${name}</h2>
    <span style="color: ${getStatusColor(status)}">º</span>
    <span>${status}</span>
    <span> - ${species}</span>
    <dl>
    <dt>Last known location:</dt>
    <dd>${location}</dd>
    <dt>First seen in:</dt>
    <dd data-js="firstSeenIn"></dd>
    </dl></div>
    `,
  })

  const firstSeenIn = getByDataJs('firstSeenIn', el)
  fetchEpisode(firstSeenInUrl)

  return el

  function fetchEpisode(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        firstSeenIn.innerText = data.name
      })
  }

  function getStatusColor(status) {
    if (status === 'Alive') {
      return 'green'
    }
    return 'red'
  }
}
