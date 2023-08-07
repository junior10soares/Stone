import { ArrowLeft } from '@phosphor-icons/react'
import { Container } from './styles'

interface Props {
  setShowSuccess: (value: boolean) => void
  inputValue: string
  selectedCurrencyBid: number
}

export function Sucess({
  setShowSuccess,
  inputValue,
  selectedCurrencyBid,
}: Props) {
  function handleBackToMain() {
    setShowSuccess(false)
  }

  // Converter inputValue em número antes da operação
  const numericInputValue = parseFloat(inputValue)
  const result = (numericInputValue * selectedCurrencyBid).toFixed(2)

  return (
    <Container>
      <button onClick={handleBackToMain}>
        <ArrowLeft size={24} /> Voltar
      </button>
      <h6>O resultado do cálculo é:</h6>
      <strong>R$ {result}</strong>
      <p>
        Compra no dinheiro a taxa é de{' '}
        <span>{`${(selectedCurrencyBid * 1).toFixed(2)}%`}</span>
      </p>
    </Container>
  )
}
