"use client";
import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import Link from "next/link";
const NavbarDropdown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Menu className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
      >
        <DropdownItem>
          <Link href="/">Home</Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/About">About</Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/Projects">Project</Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/AI">AI</Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/Contact">Contact</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarDropdown;
