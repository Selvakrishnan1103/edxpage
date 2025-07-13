"use client";

import Link from "next/link";
import Image from "next/image";
import ButtonOne from "./Button1";
import SearchBox from "./SearchBox";
import ButtonTwo from "./Button2";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

const menuItems = [
    { name: "Edx Business", link: "/EdxBusiness" },
    { name: "Sign In", link: "/signin" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>

            <div className="hidden md:flex justify-between p-5 px-4">
                <div className="flex gap-5 items-center">
                    <Link href="/" className="logo">
                        <Image
                            src="/edx-logo-elm.svg"
                            alt="Logo"
                            width={60}
                            height={60}
                        />
                    </Link>
                    <ButtonOne name="Learn" />
                    <SearchBox />
                </div>
                <nav className="flex gap-4 items-center">
                    <ul className="flex gap-4">
                        {menuItems.map((item) => (
                            <li key={item.name} className="hover:bg-gray-200 p-2 rounded-full">
                                <Link href={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <ButtonTwo name="Register for Free" />
                </nav>
            </div>

            <div className="flex md:hidden justify-between p-4 items-center">
                <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    {isOpen ? <X /> : <Menu />}
                </button>
                <Link href="/" className="logo">
                    <Image
                        src="/edx-logo-elm.svg"
                        alt="Logo"
                        width={60}
                        height={60}
                    />
                </Link>
                <Search />
            </div>

            <div
                className={`bg-black text-white transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[200px] py-4" : "max-h-0"
                }`}
            >
                <nav>
                    <ul className="flex flex-col gap-2 px-4">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link href={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}