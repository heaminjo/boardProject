import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Post from "./Post";
import { useEffect, useState } from "react";
import BoardComp from "./BoardStyle";
import BoardList from "../components/board/BoardList";

const data = [
  { id: "1", title: "개구리와 왕자", content: "개구리가 여행하는 내용." },
  { id: "2", title: "신데렐라", content: "유리 구두 찾는 내용." },
  { id: "3", title: "백설공주", content: "사과 먹는 내용." },
  { id: "4", title: "잠자는 숲속의 공주", content: "공주가 잠자는 내용." },
  { id: "5", title: "라푼젤젤", content: "머리긴 공주 내용" },
];

export default function Board() {
  const [list, setList] = useState(data); //board 리스트

  const [search, setSearch] = useState("");

  //게시글 검색
  const boardSearch = () => {
    //검색어를 채웠을 경우
    if (search !== "") {
      const newList = list.filter(({ content }) =>
        content.toLowerCase().includes(search.toLowerCase())
      );
      setList(newList);
    } else setList(data);
  };

  return (
    <BoardComp>
      <div className="title">
        <h2>게시판 입니다.</h2>
      </div>

      {/* 리스트 출력 컴포넌트 */}
      <div className="boardList">
        <BoardList list={list} />
      </div>

      {/* new 기능 추가 */}
      {/* 게시물 검색 */}
      <div className="boardSearch">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="검색할 게시물을 입력해주세요."
          // onKeyDown={(e) => onkeydownSearch(e)}
        />
        <button onClick={() => boardSearch()}>검색</button>
      </div>
    </BoardComp>
  );
}
