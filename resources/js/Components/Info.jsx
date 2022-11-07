import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Info = ({ flash }) => {
    const [tutup, setTutup] = useState(false);
    return (
        <>
            {flash && !tutup ? (
                <div className="alert alert-info shadow-lg">
                    <div>
                        <AiFillCloseCircle
                            className="w-6 h-6 cursor-pointer"
                            onClick={() => setTutup(!tutup)}
                        />
                        <span>{flash}</span>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Info;
