import Card from './Card'

export default {
  title: 'components/CardTorben',
  component: Card,
}

export const Default = () =>
  Card({
    name: 'Torben Torben',
    image: 'https://source.unsplash.com/400x400/?comic',
    location: 'Earth',
    license: 'car',
  })
