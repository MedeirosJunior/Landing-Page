"use client";

import { useEffect } from "react";
import Link from "next/link";
import "../styles/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Apenas CSS (seguro para SSR)

const Navbar = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">Vivian Nunes Consultoria</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="#footer" className="nav-link">Sobre</Link>
            </li>
            <li className="nav-item">
              <Link href="/servicos" className="nav-link">Serviços</Link>
            </li>
            <li className="nav-item">
              <Link href="/contato" className="nav-link">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;