import styled from "styled-components";

export const StyleHability = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  text-align: left;
  background: linear-gradient(#353535, #383838);
`;
export const ContainerHability = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  color: #ffff;
  flex-wrap: wrap;
  cursor: default;
  .ContainerSkils {
    background: rgb(105, 102, 102);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: solid 2px black;
    border-radius: 20px;
    width: 500px;
    height: 300px;
    :hover {
      border: solid 2px #ffff;
    }
    h1 {
      margin-bottom: 10px;
      text-align: center;
    }

    span {
      font-size: 20px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 5px;
      :hover {
        color: rgb(186, 186, 186);
      }
    }

    @media screen and (max-width: 490px) {
      justify-content: center;
      width: 300px;
      span {
        font-size: 16px;
        img {
          width: 15px;
        }
      }
    }
  }
  
  .back {
    div {
      display: flex;
      gap: 100px;
      justify-content: center;
      align-items: center;
    }
  }
  .front {
    display: flex;
    gap: 100px;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    @media screen and (max-width: 500px) {
      gap: 40px;
    }
  }
`;
