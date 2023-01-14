import { ComponentMeta, ComponentStory } from '@storybook/react'
import TextInput from './TextInput'

export default {
  title: 'UI/TextInput',
  component: TextInput,
  argTypes: {},
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
)

export const Normal = Template.bind({})
