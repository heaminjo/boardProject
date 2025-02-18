import styled from "styled-components";

const BoardComp = styled.div`
  width: 600px;
  margin: 0 auto;
  margin-top: 100px;
  .title {
    text-align: center;
    height: 50px;
    line-height: 50px;
    background-color: black;
    color: #fff;
  }
  li {
    list-style: none;
  }
  .boardList {
    width: 100%;
    ul {
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
      li {
        cursor: pointer;
        line-height: 30px;
        border: 2px solid #000;
        display: flex;
        gap: 20px;
        background-color: #000;
        color: #fff;
        a {
          color: #fff;
          text-decoration: none;
          padding: 10px;
          display: block;
          width: 100%;
        }
      }
    }
  }
`;
export default BoardComp;
