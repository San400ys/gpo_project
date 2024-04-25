import styled from "styled-components"

export const MyButton = styled.button`
  color: #000000;
  font-family: "Verdana", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  width: 100%;
  height: 56px;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  border-radius: 16px;
  background: #bfbfbf;
  &:hover {
    background: #d9d9d9;
  }
  &:active {
    background: #8c8c8c;
  }
`
