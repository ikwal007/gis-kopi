import { Link } from "@inertiajs/inertia-react";
import React from "react";
import ApplicationLogo from "../ApplicationLogo";

const NavbarLoged = () => {
    return (
        <nav className="navbar px-6 bg-[#BA68C8] text-primary-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#BA68C8] text-white rounded-box w-52"
                    >
                        <li>
                            <Link className={route().current('dashboard.index') ? 'bg-[#263238]' : null} href="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link className={route().current('map.index') ? 'bg-[#263238]' : null} href="/map">Map</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <ApplicationLogo className='h-12 w-12 text-white' />
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#BA68C8] text-white rounded-box w-52"
                    >
                        <li>
                            <Link href="/logout" as="button" type="submit" method="post">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarLoged;
