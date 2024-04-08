import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex justify-between items-center bg-white">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={130} height={100} />
      </Link>

      <div>
        <Link href="/">Home</Link>
      </div>

      <div>
        <Link href="/cart">
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
