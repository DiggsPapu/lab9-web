import Button from './button'

export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
}
export const ColorAndText = {
  args: {
    backgroundColor: 'orange',
    text: 'Ohhh yeah!',
  },
}
export const CircularButton = {
  args: {
    backgroundColor: 'blue',
    text: 'Ohhh yeah!',
    circular: true,
  },
}
export const RectangularButton = {
  args: {
    backgroundColor: 'yellow',
    text: 'Ohhh yeah!',
    circular: false,
  },
}
export const Bordered = {
  args: {
    backgroundColor: 'purple',
    text: 'Ohhh yeah!',
    bordered: true,
  },
}
export const UpperCase = {
  args: {
    backgroundColor: 'red',
    text: 'Ohhh yeah!',
    upperCase: true,
  },
}
export const FontColor = {
  args: {
    backgroundColor: 'black',
    text: 'Ohhh yeah!',
    fontColor: 'yellow',
  },
}
