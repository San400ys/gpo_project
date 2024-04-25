import styled from "styled-components"

export const Card = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px;
  &:hover {
    background: #d9d9d9;
  }
  &:active {
    background: #8c8c8c;
  }
`
export const Inf = styled.div`
  display: flex;
  align-items: center;
  gap:20px;
`
export const Svg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
`
export const Title = styled.p`
  max-width: 200px;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`