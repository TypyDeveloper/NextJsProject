"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavigationItem {
  title: string;
  href: string;
  description: string;
}

interface NavigationMenuDemoProps {
  title: string;
  items: NavigationItem[];
}

export function NavigationMenuDemo({ title, items }: NavigationMenuDemoProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="sm:font-semibold sm:text-base">
            {title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      {title} Collection
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Explore our latest collection of {title.toLowerCase()} shoes.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {items.map((item) => (
                <ListItem key={item.title} href={item.href} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

// Example Usage
const newFeaturedItems: NavigationItem[] = [
  {
    title: "Men's Shoes",
    href: "/mens-shoes",
    description: "Re-usable components built using Radix UI and Tailwind CSS.",
  },
  {
    title: "Kid's Shoes",
    href: "/kids-shoes",
    description: "How to install dependencies and structure your app.",
  },
  {
    title: "Sandals",
    href: "/sandals",
    description: "Styles for headings, paragraphs, lists...etc",
  },
];

export function App() {
  return (
    <div>
      <NavigationMenuDemo title="New & Featured" items={newFeaturedItems} />
    </div>
  );
}