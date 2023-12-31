
# Desafio web
O desafio é criar uma aplicação de conversão de valores de dólar para real. 

A aplicação terá duas etapas, uma para inserir o valor que se deseja converter e outra para mostrar os valores convertidos.

Para isso, você deve buscar a cotação na [API de moedas][QUOTATION_API].

A aplicação deve mostrar os seguintes dados:

1. Cotação do dólar
2. IOF
3. Total em dólar sem imposto
4. Total em dólar com imposto
5. Total em real sem imposto
6. Total em real com imposto

<br/>

## Cálculo dos valores 

### Comprando com dinheiro 

`[(Valor em dólar) + (imposto do Estado)] x (valor do dólar + IOF da compra de dólar)`

### Comprando com cartão 

`[(Valor em dólar) + (imposto do Estado) + (IOF de transações internacionais)] x (valor do dólar)`

<br/>
<br/>

## Possíveis dúvidas:

- IOF é um imposto federal e tem como intuito ser um regulador da economia nacional. Em dinheiro, seu valor é 1,1%, e em cartão 6,4%
- Nos EUA, cada Estado tem sua própria cobrança de impostos. Por exemplo, o imposto de Nevada é de 8,19%, já o de Nova Iorque é de 8,87%

<br/>

## Requisitos
- Utilize a fonte do layout
- Utilize React
- Utilize TypeScript
- Crie um cliente HTTP com axios
- Faça testes unitários dos seus componentes
- Utilize uma bilbioteca de cache como swr ou react-query
- Utlize styled-components
- Publique seu código no seu perfil no GitHub em um **repositório privado**

<br/>

## Critérios de avaliação 

### Entrega
- O resultado final está completo para ser executado?
- O resultado final atende ao que se propõe fazer?
- O resultado final atende totalmente aos requisitos propostos?
- O resultado final é visualmente elegante?

### Boas práticas
- O código está de acordo com o guia de estilo da linguagem?
- O código está bem estruturado?
- O código faz o bom uso de *Design Patterns*?
- O código possui testes?

### Documentação
- O código foi entregue com um arquivo de _README_ claro de como instalar e codificar no projeto?
- O código possui comentários pertinentes?
- O código está em algum controle de versão?
- Os _commits_ são pequenos e consistentes?
- As mensagens de _commit_ são claras?

<br/>

### **Material de estudo**
- [Boas Práticas na Stone](https://github.com/stone-payments/stoneco-best-practices/blob/master/README_pt.md)
- [Airbnb Javascript](https://github.com/airbnb/javascript)
