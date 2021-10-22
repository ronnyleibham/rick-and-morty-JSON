import Card from './Card'

export default {
  title: 'components/Card',
  component: Card,
}

export const Default = () =>
  Card({
    image: 'https://source.unsplash.com/400x400/?comic',
    name: 'Rick Sanchez',
    species: 'Human',
    location: 'Earth',
    // firstMovie: 'Pilot',
  })
