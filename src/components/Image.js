import { createElement } from '../lib/dom'
import './Image.css'

export default function Image({ src }) {
  const el = createElement('img', {
    className: 'Image',
    src: src,
    alt: '',
    width: 300,
    height: 300,
    style: 'background: #ccc;',
  })

  return el
}
