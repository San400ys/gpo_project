import styled from "styled-components"

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 15px 0 15px;
  overflow: hidden;
`
export const Container = styled.div`
  max-width: 1340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:100%;
  margin: 0 40px;
  background-color: #ffffff;
  @media (max-width: 1439px) {
    padding: 0 30px;
  }
  @media (max-width: 1019px) {
    padding: 0 20px;
  }
`
export const Title = styled.p`
  margin: 16px 0;
  color: #141c24;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
`
export const Btn = styled.div`
  width: 300px;
  position:fixed;
  bottom:20px;
  right:20px;
`
export const View = styled.div`
    display: flex;
`
export const ChartInf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:20px 0;
`