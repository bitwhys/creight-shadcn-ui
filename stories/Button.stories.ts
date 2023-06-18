import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "@/components/ui/button"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Button",
  },
}

export default meta
type Story = StoryObj<typeof Button>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
  },
}
