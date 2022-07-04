import styled from 'styled-components'

export const Container = styled.div``

export const InnerContainer = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 15px;

  @media (min-width: 576px) {
    padding: 0px 30px;
  }

  @media (min-width: 769px) {
    width: 85%;
    padding: 0px;
  }

  @media (min-width: 1440px) {
    padding: 0px 60px;
    width: 100%;
  }
`

export const LoadingContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`