import { Outlet, Link } from "react-router-dom";
import "./NavbarPronto.css";

const Layout = () => {
  return (
    <div>
      <nav class="navbar navbar-pronto navbar-light bg-light">
        <Link class="heading-item" to="/">Pronto.   </Link>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;

/*
<a class="navbar-brand" href="/">Pronto.</a>
        <div>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/docs">Docs</a>
            </li>
          </ul>
        </div>
*/