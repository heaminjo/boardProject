import { NavLink } from "react-router-dom";

export default function BoardList({ list }) {
  // console.log("list에ㅅ " + list);

  return (
    <div>
      <ul>
        {/* map 사용 : props로 전달받은 list를 map을 돌려 li 엘리먼트로 출력 */}
        {list.map(({ id, title, content }) => {
          return (
            <li>
              <NavLink to={`/board/post/${id}`}>
                {id} {title} {content}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
