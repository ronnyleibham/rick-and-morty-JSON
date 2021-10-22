import Image from './Image'

export default {
  title: 'components/Image',
  component: Image,
}

export const Default = () =>
  Image({ src: 'https://source.unsplash.com/200x200?cartoon' })
