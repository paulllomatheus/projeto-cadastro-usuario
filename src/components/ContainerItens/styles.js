import styled from "styled-components"

export const ContainerItens = styled.div`
  height: 100vh;
  width: 414px;

  border-radius: 61px 61px 0px 0px;
  background: linear-gradient(
    157deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );

  display: flex;
  flex-direction: column;
  padding: 50px 36px;

  ${(props) =>
    props.isblur &&
    `
  min-height: calc(100vh - 257px);
  backdrop-filter: blur(22.5px);
  `}
`
