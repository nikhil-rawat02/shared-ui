import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { EditIcon } from "../../icons/EditIcon"; // optional if you add icons

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    iconPosition: {
      control: { type: "radio" },
      options: ["left", "right"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Edit",
    variant: "secondary",
    icon: <EditIcon className="w-4 h-4" />,
    iconPosition: "left",
  },
};

export const DangerFullWidth: Story = {
  args: {
    children: "Delete",
    variant: "danger",
    fullWidth: true,
  },
};

