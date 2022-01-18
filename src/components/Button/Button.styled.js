import styled from "styled-components";

export const Btn = styled.button`
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 20px;
  margin-right: 20px;
  font: normal 17px arial;
  :hover {
    transition: color 200ms linear, text-shadow 500ms linear;
    background-color: silver;
    text-shadow: 0 0 21px gold, 0 0 10px green, 0 0 2px #2a153c;
    transition: 0.6s;
  }
`;
