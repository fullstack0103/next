import React from 'react'
import styled, { css } from 'styled-components'

export const HeroContainerStyled = styled.div`
  width: 100%;
  height: calc(100vh - 97px);
  padding-top: 0px;
  position: relative;

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}

  @media (min-width: 576px) {
    height: calc(100vh - 65px);
  }

  @media (min-width: 993px) {
    height: auto;
    padding-top: 53%;
  }
`

export const HeroContainer = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <HeroContainerStyled {...props} style={style}>
      {props.children}
    </HeroContainerStyled>
  )
}

export const Title = styled.h1`
  margin: 0px;
  text-align: left;
  font-weight: 500;
  font-size: 50px;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;

  @media (min-width: 400px) {
    font-size: 65px;
  }

  @media (min-width: 576px) {
    font-size: 72px;
  }
`

export const Slogan = styled.p`
  margin: 0px;
  text-align: left;
  font-size: 24px;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  margin-bottom: 37px;

  @media (min-width: 480px) {
    font-size: 24px;
  }
`

export const WrapInput = styled.div`
  position: relative;
  cursor: pointer;
  padding: 10px 25px;
  background: #FFFFFF;
  border: 1px solid #DEE2E6;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 27px;

  ${({ withIcon }) => withIcon && css`
    width: calc(100% - 20px);
    box-sizing: border-box;

    &::before {
      content: "";
      position: absolute;
      right: 5px;
      top: 0;
      bottom: 18px;
      width: 15px;
    }
  `}
  
  p {
    color: black;
    position: relative;
    margin: 0;
  }

  svg {
    color: #2c7be5;
    width: 22px;
    height: 22px;
    min-width: 22px;
    margin-right: 20px;

  }
`

export const ContentWrapper = styled.div`
  position: absolute;
  display: flex;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004D;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 40px);
    position: relative;
    padding: 20px;

    button {
      width: 180px;
      font-size: 18px;
      padding-top: 5px;
      padding-bottom: 5px;
      background-color: #2c7be5;
      border: none;
      color: white;
    }

    input {
      width: 90%;
      margin-bottom: 15px;
    }

    @media (min-width: 425px) {
      input {
        width: 97%;
      }
    }

    @media (min-width: 768px) {
      padding: 40px;
      width: 50%;
    }
  }

`
