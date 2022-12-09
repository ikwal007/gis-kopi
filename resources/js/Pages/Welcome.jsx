import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Tamu from "@/Layouts/Tamu";
import Rive from '@rive-app/react-canvas';

export default function Welcome(props) {
    return (
        <Tamu>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-base-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Halo</h1>
                            <p className="py-6">
                                Di sini kami membuat tugak kuliah mengenai gis.
                                Dalam contoh kali ini kami memilih warkop
                                sebagai kasusnya, yang berada di banda aceh
                            </p>
                        </div>
                        <div className="max-w-md">
                            <Rive src='' className="w-96 h-96" />
                            okok
                        </div>
                    </div>
                </div>
            </div>
        </Tamu>
    );
}
