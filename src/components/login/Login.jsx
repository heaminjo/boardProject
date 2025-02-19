import { useState } from "react";

export default function Login({ userLogin }) {
  const [member, setMember] = useState({
    id: "",
    pwd: "",
    names: "",
  });
  const setInput = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="container">
        {/* 로그인 데이터 전송 */}
        <form
          onSubmit={(e) => {
            console.log("로그인 클릭");
            e.preventDefault();
            //로그인 함수 member 객체로 보내기
            userLogin(member);
          }}
        >
          <input
            type="text"
            value={member.id}
            name="id"
            onChange={setInput}
            placeholder="아이디"
          />
          <br />
          <input
            type="password"
            name="pwd"
            value={member.pwd}
            placeholder="비밀번호"
            onChange={setInput}
          />
          <br />
          <input
            type="type"
            value={member.names}
            name="names"
            placeholder="비밀번호"
            onChange={setInput}
          />
          <input type="submit" onClick={() => alert("클릭")} value="로그인" />
        </form>
      </div>
    </>
  );
}
