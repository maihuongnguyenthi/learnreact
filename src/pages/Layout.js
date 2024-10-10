import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">App</Link>
          </li>
          <li>
            <Link to="/two-way-bindings">Two Way Bindings</Link>
          </li>
          <li>
            <Link to="/todo-list">Todo List</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;