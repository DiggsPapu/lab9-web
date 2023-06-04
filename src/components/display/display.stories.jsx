import Display from './display'

export default {
  title: 'Example/Display',
  component: Display,
  tags: ['autodocs'],
  argTypes: {},
}
export const ColorAndText = {
  args: {
    backgroundColor: 'orange',
    fontColor: 'red',
  },
}
export const Error999 = {
  args: {
    value: '99999999999999999',
  },
}
