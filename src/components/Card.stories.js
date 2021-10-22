import Card from './Card'

export default {
  title: 'components/Card',
  component: Card,
}

export const ShortText = () =>
  Card({
    name: 'Jane Doe',
    image: 'https://source.unsplash.com/300x300?comic',
    location: 'at home',
  })
