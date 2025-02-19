import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import { Route, Router, Routes } from "react-router-dom";
import Board from "./pages/Board";
import Post from "./pages/Post";
import Layout from "./pages/Layout";
import GlobalStyle from "./pages/GlobalStyle";
import Login from "./components/login/Login";
import Join from "./components/sign/Join";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("");

  //로그인 함수
  const userLogin = ({ id, pwd, names }) => {
    console.log("로그인 함수 실행");
    if (id == null || id.length < 7) {
      alert("로그인 실패");
      return;
    }

    const userData = { id: id, pwd: pwd, name: names };
    sessionStorage.setItem("userData", JSON.stringify(userData));
    setIsLogin(true);
    setUser(userData);
    alert("로그인 성공");
  };
  return (
    <>
      {/* <GlobalStyle> */}
      <Routes>
        <Route element={<Layout isLogin={isLogin} />}>
          <Route path="/" element={<Main />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board/post/:id" element={<Post />} />
          <Route path="/login" element={<Login userLogin={userLogin} />} />
          <Route path="/join" element={<Join />} />
        </Route>
      </Routes>
      {/* </GlobalStyle> */}
    </>
  );
}

export default App;
