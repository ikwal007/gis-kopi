import React from "react";

const LessFooter = () => {
    return (
        <footer className="footer footer-center p-4 bg-primary text-primary-content">
            <div>
                <p>
                    Copyright © {new Date().getFullYear()} - All right reserved by Kelompok 2
                </p>
            </div>
        </footer>
    );
};

export default LessFooter;
