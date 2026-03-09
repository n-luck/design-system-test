import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "secondary",
        "destructive",
        "ghost",
        "link",
        "outline",
        "navigation",
        "navigationSecondary",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["default", "icon", "sm", "lg"],
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      toc: true,
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/836Xy3CkxKnLEOCVxuyUzO/Storybook-Connect-Test?node-id=3-6&t=BA8aZI4GA0yagb6T-1",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// Button Variants

// <Button variant="default">Default</Button>
export const Default: Story = {
  args: {
    variant: "default",
    children: "Default",
  },
};

// <Button variant="secondary">Secondary</Button>
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

// <Button variant="destructive">Destructive</Button>
export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

// <Button variant="ghost">Ghost</Button>
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

// <Button variant="link">Link</Button>
export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

// <Button variant="outline">Outline</Button>
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

// <Button variant="navigation">Navigation</Button>
export const Navigation: Story = {
  args: {
    variant: "navigation",
    children: "Navigation",
  },
};

// <Button variant="navigationSecondary">Navigation Secondary</Button>
export const NavigationSecondary: Story = {
  args: {
    variant: "navigationSecondary",
    children: "Navigation Secondary",
  },
};
