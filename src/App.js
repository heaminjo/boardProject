import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import Board from "./pages/Board";
import Post from "./pages/Post";

// 간단 게시판판

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/post/:id" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
