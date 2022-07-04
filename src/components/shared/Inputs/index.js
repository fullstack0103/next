import styled, { css } from 'styled-components'

export const Input = styled.input`
  background: #FFF;
  border: 1px solid #E9EFFC;
  font-size: 16px;
  line-height: 26px;
  padding: 14px 17px;
  border-radius: 8px;
  outline: none;
  &:focus {
    border-color: #2c7be5;
  }
  ${({ w }) => w && css`
    width: 20%;
  `}
  &::placeholder,
  &::-webkit-input-placeholder {
    color: #DBDCDB;
  }
  &:-ms-input-placeholder {
    color: #DBDCDB;
  }
  &::-ms-reveal{
    display: none;
  }
  &:read-only {
    background: #E9EFFC;
    cursor: not-allowed;
  }
`
