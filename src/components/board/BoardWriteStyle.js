import styled from "styled-components";

const WriteComp = styled.div`
  margin: 0 auto;
  width: 600px;
  text-align: center;
  background-color: #ddd;
  padding: 10px;
  margin-top: 20px;
  .writeContainer {
    margin: 0 auto;
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    .titleBox {
      background-color: #fff;
      height: 40px;
      input {
        width: 100%;
        height: 40px;
        padding: 5px;
      }
    }
    .contentBox {
      background-color: #fff;
      height: 200px;
      textarea {
        width: 100%;
        height: 100%;
        padding: 5px;
      }
    }
  }
`;
export default WriteComp;
