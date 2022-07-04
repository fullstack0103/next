import styled from 'styled-components';

export const Container = styled.div``;

export const FormContainer = styled.form``

export const ButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;

  button {
    height: 44px;
    &:first-child {
      margin-right: 0px;
      margin-bottom: 15px;
    }
    width: 100%;
  }

  @media (min-width: 500px) {
    button {
      width: 100px;
      &:first-child {
        margin-right: 20px;
        margin-bottom: 0px;
      }
    }
  }
`

export const FormController = styled.div`
  margin-bottom: 15px;
  label {
    font-size: 16px;
    margin-bottom: 10px;
    display: block;
  }
  input {
    width: 100%;
  }
`
export const ValidationMsg = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: rgb(235,87,87);
  display: block;
  margin-top: 10px;
`
