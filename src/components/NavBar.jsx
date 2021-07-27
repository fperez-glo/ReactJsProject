import CartWidget from "./CartWidget";
import pageLogo from "../images/logo.svg";
import searchButtonIco from "../images/searchIcon.svg";
import { Link } from "react-router-dom";
import { Button, Card, NavDropdown } from "react-bootstrap";



const NavBar = () => {
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
              <Link to="/">Home</Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <NavDropdown title="Catalogo" id="basic-nav-dropdown">
               <Link to="/category/procesadores"><NavDropdown.Item href="#action/3.1">processors</NavDropdown.Item></Link>
               <Link to="/category/videoCards"><NavDropdown.Item href="#action/3.2">videoCards</NavDropdown.Item></Link>
              </NavDropdown>
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

// TODO: No se si esto lo voy a usar.
// const Nav = styled.nav`
// background: red;
// height: 80px;
// display: flex;
// justify-content:center;`

export default NavBar;
