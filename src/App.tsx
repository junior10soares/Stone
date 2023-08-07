import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { DefaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}
