import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import App from './pages/App';
import TwoWayBinding from './pages/twoWayBinding';
import TodoList from './pages/TodoList';
import LearnUseEffect from './pages/LearnUseEffect';
import LearnUseEffectClosure from './pages/LearnUseEffectClosure';
import LearnUseEffectChatApp from './pages/LearnUseEffectChatApp';
import NoPage from './pages/NoPage';
import reportWebVitals from './reportWebVitals';

//fake comments
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Noi dung comment cua lesson ${id}`
      })
    )
  }, 2000)
}
emitComment(1)
emitComment(2)
emitComment(3)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="two-way-bindings" element={<TwoWayBinding />} />
          <Route path="todo-list" element={<TodoList />} />
          <Route path="learn-useEffect" element={<LearnUseEffect />} />
          <Route path="learn-useEffect-closure" element={<LearnUseEffectClosure />} />
          <Route path="learn-useEffect-chat-app" element={<LearnUseEffectChatApp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
