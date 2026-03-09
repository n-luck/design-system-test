import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuLinkSecondary,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLinkPopover,
} from "@/components/ui/navigation-menu";
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
import { TypographyH2 } from "@/components/ui/typography";
import { invoices } from "./constants";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex w-full max-w-3xl justify-end bg-sidebar ">
        <NavigationMenu className="py-4">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLinkPopover>Link</NavigationMenuLinkPopover>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href="/docs">Docs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLinkSecondary>
                <Link href="/docs">Docs</Link>
              </NavigationMenuLinkSecondary>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-8 py-8 px-16 bg-white dark:bg-black sm:items-start">
        <div className="w-full">
          <TypographyH2>Buttons</TypographyH2>
          <div className="flex flex-row gap-4">
            <Button>Default</Button> <Button variant="outline">Outline</Button>{" "}
            <Button variant="secondary">Secondary</Button>{" "}
            <Button variant="navigation">Navigation</Button>{" "}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <TypographyH2>Colors</TypographyH2>
          <p>Test paragraph.</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[12.5%]">Color</TableHead>
                <TableHead className="w-[12.5%]">Name</TableHead>
                <TableHead className="w-[12.5%]">Color</TableHead>
                <TableHead className="w-[12.5%]">Name</TableHead>
                <TableHead className="w-[12.5%]">Color</TableHead>
                <TableHead className="w-[12.5%]">Name</TableHead>
                <TableHead className="w-[12.5%]">Color</TableHead>
                <TableHead className="w-[12.5%]">Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="bg-primary"></TableCell>
                <TableCell>Limegreen</TableCell>
                <TableCell className="bg-secondary"></TableCell>
                <TableCell>Darkgreen</TableCell>
                <TableCell className="bg-muted"></TableCell>
                <TableCell>Lightgreen</TableCell>
                <TableCell className="bg-sidebar"></TableCell>
                <TableCell>Petrol</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="w-full">
          <TypographyH2>Tables</TypographyH2>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-25">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-50">Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </main>
    </div>
  );
}
