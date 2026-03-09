import { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const meta = {
  title: "Example/Spacing",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A description, overriding the comments",
      },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

const spacings = [
  {
    name: "p-0",
    size: "0px",
  },
  {
    name: "p-1",
    size: "4px",
  },
  {
    name: "p-2",
    size: "8px",
  },
  {
    name: "p-3",
    size: "12px",
  },
  {
    name: "p-4",
    size: "16px",
  },
  {
    name: "p-5",
    size: "20px",
  },
   {
    name: "p-96",
    size: "384px",
  },
];

export const Spacings: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The Description block displays the description for a component, story, or meta obtained from their respective JSDoc comments.",
      },
    },
  },
  render: () => (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Spacing size</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {spacings.map((spacing) => (
            <TableRow key={spacing.name}>
              <TableCell>{spacing.name}</TableCell>
              <TableCell>{spacing.size}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  ),
};
