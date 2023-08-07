import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { ContainerImg } from './styles'

export function Home() {
  return (
    <ContainerImg>
      <Header />
      <Main />
    </ContainerImg>
  )
}
