import styled from "styled-components"

export const Header = styled.header`
  max-width: 1340px;
  width: 100%;
  background-color: #ffffff;
`
export const Container = styled.div`
  max-width: 1340px;
  display: flex;
  align-items: center;
  height: 120px;
  padding: 0 40px;
  justify-content: space-between;
  @media (max-width: 1019px) {
    height: 100px;
  }
  @media (max-width: 767px) {
    height: 80px;
    justify-content: center;
  }
`
export const MyTitle = styled.p`
  font-size: 36px;
`
export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`
export const User = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bfbfbf;
  &:hover {
    background: #d9d9d9;
  }
  &:active {
    background: #8c8c8c;
  }
`
