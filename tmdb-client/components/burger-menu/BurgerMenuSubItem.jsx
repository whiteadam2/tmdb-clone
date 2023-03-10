import React from "react";
import Link from "next/link";

export function BurgerMenuSubItem({ name, url }) {
  return (
    <li className="text-md mt-1 font-light">
      <Link href={url}>{name}</Link>
    </li>
  );
}
