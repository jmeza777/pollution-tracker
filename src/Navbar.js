import React from 'react';
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <>
        <nav className="nav">
            
        <p className="site-title">  Pollution Tracker </p>
    
      <li>
      <Link className="home-nav" to="/"><i class="bi bi-house"></i></Link>
      </li>

      <li>
       <Link className="map-nav" to="/map"><i class="bi bi-globe-americas"></i></Link>
      </li>
            
        </nav>
        </>
    )
}
