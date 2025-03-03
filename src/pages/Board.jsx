import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Post from "./Post";
import React, { useContext, useEffect, useRef, useState } from "react";
import BoardComp from "./BoardStyle";
import BoardList from "../components/board/BoardList";

const data = [
  { id: "1", title: "개구리와 왕자", content: "개구리가 여행하는 내용." },
  { id: "2", title: "신데렐라", content: "유리 구두 찾는 내용." },
  { id: "3", title: "백설공주", content: "사과 먹는 내용." },
  { id: "4", title: "잠자는 숲속의 공주", content: "공주가 잠자는 내용." },
  { id: "5", title: "라푼젤젤", content: "머리긴 공주 내용" },
];

export const BoardContext = React.createContext();

export default function Board() {
  const navigate = useNavigate();

  //board의 id 값으로 넣어줄줄 ref
  const idRef = useRef(data.length);

  //*** 상태변수 ***
  const [list, setList] = useState(data); //원본 board 리스트
  const [filterList, setFilterList] = useState([]); //검색 board 리스트
  const [search, setSearch] = useState("");

  //*** 게시글 검색 함수 ***
  const boardSearch = () => {
    //검색어를 채웠을 경우
    if (search !== "") {
      setFilterList(
        list.filter(({ content }) =>
          content.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else setFilterList([]);
  };

  // *** 게시글 추가 함수 ***
  const addBoard = ({ title, content }) => {
    setList({ id: idRef, title: title, content: content });
    idRef++;
    console.log("추가 완료");
  };

  //--------------------------------
  return (
    <BoardComp>
      <div className="title">
        <h2>게시판 입니다.</h2>
      </div>

      {/* 리스트 출력 컴포넌트 */}
      <div className="boardList">
        {filterList.length == 0 ? (
          <BoardList list={list} />
        ) : (
          <BoardList list={filterList} />
        )}
      </div>

      {/* new 기능 추가 */}
      {/* 게시물 검색 */}

      <div className="boardService">
        <div className="boardWrite">
          {/* 에러********************* */}
          <BoardContext.Provider value={addBoard}>
            <button onClick={() => navigate("/write")}>게시물 작성</button>
          </BoardContext.Provider>
        </div>
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
      </div>
    </BoardComp>
  );
}
