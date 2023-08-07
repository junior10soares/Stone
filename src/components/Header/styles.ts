import { styled } from 'styled-components'

export const Container = styled.header`
  display: flex;
  margin-top: 64px;
  margin-left: 64px;
  align-items: center;
`
export const ContainerText = styled.div`
  margin-left: 48px;
  font-size: 16px;
  color: ${(props) => props.theme.black};
`
