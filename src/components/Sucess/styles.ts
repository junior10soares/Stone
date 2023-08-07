import { styled } from 'styled-components'

export const Container = styled.div`
  margin-top: 40px;
  margin-left: 64px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    gap: 16px;
    border-radius: 8px;
    border: 1px solid #d7e0eb;
    background: transparent;
    box-shadow: 0px 8px 4px 0px #0d111b14;
    width: 120px;
    height: 56px;
    cursor: pointer;
  }
  button:hover {
    background: black;
    font-weight: bold;
    color: white;
  }
  h6 {
    margin-top: 32px;
    font-size: 20px;
    font-weight: bold;
  }
  strong {
    font-size: 64px;
    margin-top: 8px;
    color: ${(props) => props.theme.green};
  }
  p {
    margin-top: 15px;
  }
  span {
    font-weight: bold;
  }
`
