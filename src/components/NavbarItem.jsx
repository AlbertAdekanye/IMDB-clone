"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({title, param}) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`cursor-pointer hover:text-amber-500 font-semibold ${
        genre === param
          ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
          : "text-white"
      }`}
      href={`/?genre=${param}`}
    >
      {title}
</Link>
    </div>
  )
}
