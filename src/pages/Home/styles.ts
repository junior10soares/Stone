import { styled } from 'styled-components'
import mask from '../../assets/mask.png'

export const ContainerImg = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-image: url(${mask});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top right; /* Ajuste a posição da imagem, se necessário */
`
