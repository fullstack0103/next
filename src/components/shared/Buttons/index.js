
import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #CCC;
  color: #FFF;
  border: 1px solid #CCC;
  border-radius: ${({ borderRadius }) => !borderRadius ? '8px' : borderRadius};
  line-height: 17px;
  padding: 10px 17px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all .2s ease-in;

  &:active {
    background: ${() => darken(0.07, '#CCC')};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  ${({ initialIcon }) => initialIcon && css`
    text-align: left;
    img{
      vertical-align: middle;
    }
    span {
      padding-left: 15%
    }
  `}
  ${({ outline }) => outline && css`
    background: #FFF;
    color: #CCC;
    border-color: #CCC;
    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
    &:hover {
      background: ${darken(0.07, '#CCC')};
      color: #FFF;
    }
  `}
  ${({ circle }) => circle && css`
    background: #CCC;
    color: #FFF;
    border-color: #CCC;
    padding: 0;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border-radius: 50%;
    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
  `}
  ${({ circle, outline }) => circle && outline && css`
    background: #FFF;
    color: #CCC;
    border-color: #CCC;
    padding: 0;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border-radius: 50%;
    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
  `}

  ${({ color }) => color === 'primary' && css`
    display: flex;
    align-items: center;
    background: #2c7be5;
    color: white;
    border-color: #2c7be5;
    &:hover {
      background: ${darken(0.04, '#2c7be5')};
    }
    &:active {
      background: ${darken(0.1, '#2c7be5')};
      box-shadow: 0px 4px 20px rgba(0, 117, 255, 0.35);
    }
    ${({ naked }) => naked && css`
      background: transparent;
      border-color: white;
    `}
  `}
  ${({ color }) => color === 'lightPrimary' && css`
    display: flex;
    align-items: center;
    background: #e9f2fe;
    color: #2c7be5;
    border-color: #e9f2fe;
    &:hover {
      background: ${darken(0.04, '#e9f2fe')};
    }
    &:active {
      background: ${darken(0.1, '#e9f2fe')};
      box-shadow: 0px 4px 20px rgba(0, 117, 255, 0.35);
    }
    ${({ naked }) => naked && css`
      background: transparent;
      border-color: white;
    `}
  `}
`