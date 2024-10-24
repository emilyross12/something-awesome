import { Outlet, Link } from "react-router-dom";
import "./NavbarPronto.css";

const Layout = () => {
  return (
    <div>
      <nav class="navbar navbar-pronto navbar-light bg-light">
        <a class="navbar-brand" href="/">Pronto.</a>
        <div>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/docs">Docs</a>
            </li>
          </ul>
        </div>
        
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;