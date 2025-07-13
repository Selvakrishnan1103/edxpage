"use client";

import Link from "next/link";
import Image from "next/image";
import ButtonOne from "./Button1";
import SearchBox from "./SearchBox";
import ButtonTwo from "./Button2";
export default function Header() {
    const menuItems = [
        { name: "Edx Business", link: "/EdxBusiness" },
        { name: "Sign In", link: "/signin" },
    ];
    return (
        <header>
            <div className="flex justify-between p-5 px-4">
                <div className="flex gap-5">
                    <div className="logo">
                        <Image
                            src="/edx-logo-elm.svg"
                            alt="Logo"
                            href="/"
                            width={60}
                            height={60}
                        />
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <ButtonOne name="Learn" />
                        </div>
                        <div>
                            <SearchBox />
                        </div>
                    </div>
                </div>
                <div>
                    <nav className="flex gap-4">
                        <ul className="flex gap-4">
                            {menuItems.map((item) =>(
                                <li key={item.name} className="hover:bg-gray-200 p-2 rounded-full"><Link href={item.link}>{item.name}</Link></li>
                            ))}
                        </ul>
                        <ButtonTwo name="Register for Free"/>
                    </nav>
                </div>
            </div> 
        </header>
    );
}