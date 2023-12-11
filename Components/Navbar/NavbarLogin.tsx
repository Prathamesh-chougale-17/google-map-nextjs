"use client";
import React from "react";
import { Avatar } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const NavbarLogin = () => {
  const { status, data: session } = useSession();

  return (
    <div>
      {status === "loading" && (
        <div className="my-2 ml-1 lg:my-0">Loading...</div>
      )}
      {status === "authenticated" && (
        <div className="cursor-pointer">
          <Dropdown>
            <DropdownTrigger>
              <Avatar src={`${session.user?.image!}`} />
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>
                {/* {session.user?.image} */}
                <Link href="/api/auth/signout">Sign Out</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      )}
      {status === "unauthenticated" && (
        <div className="my-2 ml-1 lg:my-0">
          <Link href="/api/auth/signin">Login</Link>
        </div>
      )}
    </div>
  );
};

export default NavbarLogin;
