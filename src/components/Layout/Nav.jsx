import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <hr />
      <ul>
        <li>
          <NavLink to={"/board"}>게시판</NavLink>
        </li>
      </ul>
      <hr />
    </>
  );
}
