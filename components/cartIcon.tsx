import Link from "next/link";
import { ShoppingCartIconHeader } from "./icons";

export function CartIcon({ totalItems }: { totalItems: number }) {
  return (
    <Link
  href="/checkout"
  className="relative inline-block rounded-md transition-transform duration-200 ease-out hover:scale-110 active:scale-95"
  >

    <div>
    <ShoppingCartIconHeader />
    </div>
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
    </Link>
  );
}