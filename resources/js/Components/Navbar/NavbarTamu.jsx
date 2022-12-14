import { Link } from "@inertiajs/inertia-react";
import React from "react";
import ApplicationLogo from "../ApplicationLogo";

const NavbarTamu = () => {
    return (
        <nav className="navbar bg-[#BA68C8] text-primary-content px-10 absolute z-10">
            <div className="flex-1 ">
                <div className="flex items-center group">
                    <ApplicationLogo
                        className={
                            "w-12 h-12 group-hover:animate-bounce transition text-[#263238] duration-700 ease-in-out group-hover:text-white"
                        }
                    />
                    <span className="text-white text-xl normal-case font-black group-hover:animate-bounce group-hover:text-[#263238] transition duration-150 ease-in-out">
                        Gis-
                    </span>
                    <span className="text-xl normal-case text-[#263238] font-black group-hover:animate-bounce group-hover:text-white transition duration-700 ease-in-out">
                        Kopi
                    </span>
                </div>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal text-white p-0">
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                    <li>
                        <Link href="/register">Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavbarTamu;
