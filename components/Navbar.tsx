"use client";

import { useUser } from "@clerk/nextjs";
import { Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const { user } = useUser();
    const [dropdownMenu, setDropdownMenu] = useState(false);

  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex justify-between items-center bg-white">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={130} height={100} />
      </Link>

      <div>
        <Link href="/">Home</Link>
      </div>

      <div>
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
        >
          <ShoppingCart />
          <p className="text-base-bold">Cart (0)</p>
        </Link>

        {user && <Menu className="cursor-pointer" />}
      </div>
    </div>
  );
};

export default Navbar;
