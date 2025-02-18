import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <>
      <h1>메인 입니다</h1>
      <NavLink to={"/board"}>게시판</NavLink>
    </>
  );
};
export default Main;
