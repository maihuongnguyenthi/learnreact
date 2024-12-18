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
          <li>
            <Link to="/learn-useEffect">learn-useEffect</Link>
          </li>
          <li>
            <Link to="/learn-useEffect-closure">learn-useEffect-closure</Link>
          </li>
          <li>
            <Link to="/learn-useEffect-chat-app">learn-useEffect-closure-chat-app</Link>
          </li>
          <li>
            <Link to="/learn-useRef">learn-useRef</Link>
          </li>
          <li>
            <Link to="/learn-memo">learn-memo</Link>
          </li>
          <li>
            <Link to="/learn-use-memo">learn-use-memo</Link>
          </li>
          <li>
            <Link to="/learn-use-reducer">learn-use-reducer</Link>
          </li>
          <li>
            <Link to="/useImperative">useImperativeHandle</Link>
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