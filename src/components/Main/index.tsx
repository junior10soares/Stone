import { Money } from '@phosphor-icons/react'
import { Container, ContainerText, ContainerButton } from './styles'
import { Sucess } from '../Sucess'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface Currency {
  name: string
  bid: number
}

export function Main() {
  const API_ENDPOINT = '/last/USD-BRL,EUR-BRL,BTC-BRL'

  const [showSuccess, setShowSuccess] = useState(false) // controla o display do sucess
  const [currencies, setCurrencies] = useState<{ [key: string]: Currency }>({}) // pega tds inf da API
  const [selectedCurrency, setSelectedCurrency] = useState<string>('') // pega as inf apenas do name para o input select
  const [selectedCurrencyBid, setSelectedCurrencyBid] = useState<number>(0) // pega as taxas de juros
  const [inputValue, setInputValue] = useState<string>('') // valor digitado no input de dinheiro
  const [errorMessage, setErrorMessage] = useState<string>('') // msg de erro

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const response = await api.get(API_ENDPOINT)
        setCurrencies(response.data)

        // Setar o primeiro valor do select como selecionado
        const firstCurrency = Object.keys(response.data)[0]
        setSelectedCurrency(firstCurrency)
        setSelectedCurrencyBid(response.data[firstCurrency].bid)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCurrencies() // Chama a função para obter as moedas assim que o componente é montado
  }, [])

  function handleConvert() {
    if (selectedCurrency && parseFloat(inputValue) > 0) {
      setShowSuccess(true)
    } else {
      setErrorMessage('Digite um valor no campo.')
    }
  }

  function handleCurrencySelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedMoeda = event.target.value // qual o nome da moeda selecionada
    setSelectedCurrency(selectedMoeda) // pega qual o nome da moeda p identificar qual juros é
    setSelectedCurrencyBid(currencies[selectedMoeda].bid) // pega o juros
  }

  return showSuccess ? (
    <Sucess
      setShowSuccess={setShowSuccess} // importa essa funçoes p outro componente
      inputValue={inputValue}
      selectedCurrencyBid={selectedCurrencyBid}
    />
  ) : (
    <Container>
      <ContainerText>
        <div>
          <select onChange={handleCurrencySelect} value={selectedCurrency}>
            {Object.keys(currencies).map((currencyName) => (
              <option key={currencyName} value={currencyName}>
                {currencies[currencyName].name}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="$ 1,00"
            min="1"
            required
            value={inputValue} // valor dig campo
            onChange={(e) => setInputValue(String(e.target.value))} // coloque o valor digitado
          />
          <div>
            {/* Exibir a mensagem de erro, se houver */}
            {errorMessage && (
              <span style={{ fontSize: '14px', color: 'red' }}>
                {errorMessage}
              </span>
            )}
          </div>
        </div>
        <div>
          <strong>Taxa do Estado</strong>
          <input
            type="text"
            placeholder={`${(selectedCurrencyBid * 1).toFixed(2)}%`} // fixa em 2 depois da virgula
            readOnly
          />
        </div>
      </ContainerText>

      <ContainerButton>
        <h3>Tipo de compra</h3>
        <div>
          <input type="radio" defaultChecked />
          <strong>Dinheiro</strong>
        </div>
        <button onClick={handleConvert}>
          <Money size={20} /> Converter
        </button>
      </ContainerButton>
    </Container>
  )
}
