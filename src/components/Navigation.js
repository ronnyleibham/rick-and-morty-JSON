import { createElement } from '../lib/dom'
import './Navigation.css'

export default function Navigation() {
  const el = createElement(
    'nav',
    {
      className: 'Navigation',
    },
    createElement(
      'button',
      { className: 'Navigation__button Navigation__button--active' },
      'Characters'
    ),
    createElement('button', { className: 'Navigation__button' }, 'Locations')
  )
  return el
}
