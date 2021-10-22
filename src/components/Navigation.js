import { createElement } from '../lib/dom'
import './Navigation.css'

export default function Navigation({ onClick }) {
  const el = createElement(
    'nav',
    {
      className: 'Navigation',
    },
    createElement(
      'button',
      {
        className: 'Navigation__button Navigation__button--active',
        onclick: () => onClick('characters'),
      },
      'Characters'
    ),
    createElement(
      'button',
      {
        className: 'Navigation__button',
        onclick: () => onClick('locations'),
      },
      'Locations'
    )
  )
  return el
}
