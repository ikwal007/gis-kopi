import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Tamu from "@/Layouts/Tamu";
import ReactTypingEffect from "react-typing-effect";
import Rive from "@rive-app/react-canvas";
import Map from "@/Components/Map/Map";

export default function Welcome({allMarker, centerMarker}) {
    return (
        <Tamu>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
                <div className="hero min-h-screen bg-[#313131] flex flex-wrap">
                    <div className="flex flex-wrap justify-between mx-20 mt-10 h-screen items-center w-full">
                        <div className="max-w-md text-white flex flex-wrap">
                            <h1 className="text-5xl font-bold text-left">
                                <ReactTypingEffect
                                    text={["Hello", "こんにちは!", "مرحبًا"]}
                                />
                            </h1>
                            <p className="py-6 text-left">
                                Di sini kami membuat tugak kuliah mengenai gis.
                                Dalam contoh kali ini kami memilih warkop
                                sebagai kasusnya, yang berada di banda aceh
                            </p>
                            <Link
                                href="#map"
                                className="btn btn-ghost bg-[#BA68C8] hover:bg-white hover:text-[#BA68C8]"
                            >
                                Buka Peta
                            </Link>
                        </div>
                        <div className="max-w-md">
                            <Rive
                                src="https://cdn.jsdelivr.net/gh/ikwal007/gis-kopi@main/public/assets/kopi.riv"
                                className="w-96 h-96"
                            />
                        </div>
                    </div>
                    <div className="mx-20 my-10 min-h-screen w-full px-5">
                        <h1 className="w-full text-4xl my-5 flex justify-center text-white" id="Map">Map</h1>
                        <div className="flex flex-wrap justify-center space-x-5 my-5">
                            <div className="w-[60%] overflow-hidden">
                                <Map allMarker={allMarker} centerMarker={centerMarker} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Tamu>
    );
}
