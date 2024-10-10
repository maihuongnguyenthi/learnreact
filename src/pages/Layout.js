import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Mounted from "./Mounted";

const Layout = () => {
    const [show,setShow]=useState(false)
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

        <button onClick={()=>setShow(!show)}>Toggle</button>
        {show && <Mounted/>}
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;