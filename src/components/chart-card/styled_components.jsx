import styled from "styled-components"

export const Card = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  gap: 50px;
  align-items: center;
  border-bottom: solid 1px;
  &:last-child{
    border: none;
  }
  &:hover {
    background: #d9d9d9;
  }
  &:active {
    background: #8c8c8c;
  }
`
export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:20px;
  border-right: 1px solid;
  width: 500px;
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
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap:20px;
`
export const Text = styled.p`
  font-size: 16px;
`
export const Span = styled.span`
  font-weight: 600;
`