import { NavLink } from "react-router-dom";
import HeaderComp from "./Headerstyle";

export default function Header() {
  return (
    <HeaderComp>
      <div className="inner">
        <div className="title">
          <h1>Title</h1>
        </div>
        <div className="service">
          <div className="s_menu">
            <ul>
              <li>
                <NavLink to={"/login"}>로그인</NavLink>
              </li>
              <li>
                <NavLink to={"/join"}>회원가입</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HeaderComp>
  );
}
