import { StoryObj } from "@storybook/web-components";
import { GrLoader, LoaderProps } from "./loader.comp";

const meta = {
  title: "Grow/Loader",
  tags: ["autodocs"],
  render: (args: LoaderProps) => GrLoader(args),
  argTypes: {
    priority: {
      description: "Color del loader en base a su prioridad",
      type: { name: "primary | secondary | tertiary" },
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
      table: {
        defaultValue: { summary: "primary" }
      }
    },
    negative: {
      description: "Indica si el loader debe tener un colo neutral blanco",
      type: { name: "boolean" },
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" }
      }
    }
  }
}

export default meta
type Story = StoryObj

export const Primary: Story = {

}