"use client";
import { usePathname } from "next/navigation";

export function ButtonList(props) {
  const { href, key, text } = props;
  const pathname = usePathname();
  const activeClass = "bg-[#5141EA]";
  const inactiveClass = "bg-gradient-to-r from-blue-300 to-blue-600";
  
  const classSelect =
    pathname === "/" && href === "/now_playing" ? activeClass : pathname.includes(href) ? activeClass:inactiveClass ;
  
    return (
    <a
      href={href}
      key={key}
      className={`${classSelect} text-white mx-4 px-6 py-1 rounded-3xl text-base`}
    >
      {text}
    </a>
  );
}
