import logo from '../../assets/logo.png'
import { Container, ContainerText } from './styles'

export function Header() {
  return (
    <Container>
      <img src={logo} alt="" />
      <ContainerText>
        <p>14 de janeiro 2021 | 21:00 UTC</p>
        <p>Dados de câmbio disponibilizados pela Morningstar.</p>
      </ContainerText>
    </Container>
  )
}
