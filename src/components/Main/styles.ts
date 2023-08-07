import { styled } from 'styled-components'

export const Container = styled.main`
  max-width: 360px;
  display: flex;
  flex-direction: column;
  margin-left: 64px;
`

export const ContainerText = styled.main`
  display: flex;
  margin-top: 90px;
  gap: 24px;

  select {
    background: transparent;
    font-weight: bold;
    border: none;
    font-size: 15px;
    max-width: 168px;
  }
  input {
    border: 1px solid #d7e0eb;
    width: 168px;
    height: 56px;
    border-radius: 4px;
    padding: 16px;
    margin-top: 10px;
    box-shadow: 0px 8px 4px 0px #0d111b14;
  }
`
export const ContainerButton = styled.main`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 17px;

  strong {
    margin-left: 10px;
  }
  input {
    margin-top: 16px;
    width: 17px;
    height: 17px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 16px;
    gap: 16px;
    height: 56px;
    width: 149px;
    background: ${(props) => props.theme['bg-button-green']};
    cursor: pointer;
    border: 2px solid green;
    color: ${(props) => props.theme.white};
    margin-top: 16px;
  }
  button:hover {
    background: ${(props) => props.theme.black};
    font-weight: bold;
  }
`
