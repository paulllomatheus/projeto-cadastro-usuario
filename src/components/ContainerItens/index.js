import React from "react"
import { ContainerItens as Container } from "./styles"

const ContainerItens = ({ children, isblur }) => {
  return <Container isblur={isblur}>{children}</Container>
}

export default ContainerItens
