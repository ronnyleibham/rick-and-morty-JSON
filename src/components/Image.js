import { createElement } from '../lib/dom'
import './Image.css'

export default function Image({ image }) {
  const el = createElement('img', {
    className: 'Image',
    src: image,
    alt: '',
  })

  return el
}
