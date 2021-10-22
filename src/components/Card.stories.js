import Card from './Card'

export default {
  title: 'components/Card',
  component: Card,
}

export const Default = () =>
  Card('Rick Sanchez', 'https://source.unsplash.com/400x400/?comic', 'Earth')
