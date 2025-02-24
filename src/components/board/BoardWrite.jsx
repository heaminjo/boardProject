import { useContext, useState } from "react";
import WriteComp from "./BoardWriteStyle";
import { NavLink, useNavigate } from "react-router-dom";
import { BoardContext } from "../../pages/Board";

export default function BoardWrite() {
  const addBoard = useContext(BoardContext);
  console.log(addBoard);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  //등록 Func

  return (
    <WriteComp>
      <h1>게시글 작성</h1>
      <div className="writeContainer">
        <div className="titleBox">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요"
          />
        </div>
        <div className="contentBox">
          <textarea
            lang="50"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력해주세요"
          ></textarea>
        </div>
        <div>
          에러
          <button onClick={() => addBoard(title, content)}>등록</button>
          <button onClick={() => navigate("/board")}>취소</button>
        </div>
      </div>
    </WriteComp>
  );
}
