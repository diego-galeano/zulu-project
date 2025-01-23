"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function ActiveLink({ children, href }: { children: React.ReactNode; href: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link 
      href={href} 
      className={`w-full hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1 group ${
        isActive ? 'text-teal-500 active' : 'text-white'
      }`}
    >
      {children}
    </Link>
  );
}
