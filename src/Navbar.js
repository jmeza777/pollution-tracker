import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
export default function Navbar() {
    return (
        <>
        <BrowserRouter>
        <nav className="nav">
            <Link to="/" className="site-title">
                Pollution Data
            </Link>
        </nav>
            </BrowserRouter>
            </>
    )
}
