import React from "react";
import CartWidget from "./CartWidget";
import pageLogo from "../images/logo.svg";
import searchButtonIco from "../images/searchIcon.svg";


function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={pageLogo} alt="" width="45" height="35" />
          </a>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar productos, marcas y ofertas..."
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
                <img src={searchButtonIco} alt="" width="45" height="35" />
            </button>
          </form>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Productos
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Sucursales
            </a>
          </li>
          <CartWidget />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
