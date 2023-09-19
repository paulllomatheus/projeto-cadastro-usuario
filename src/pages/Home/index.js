import { React, useState, useRef } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom"
import axios from "axios"

import People from "../../assets/people.svg"
import Arrow from "../../assets/arrow.svg"

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles"

const App = () => {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const history = useHistory()

  const addNewUser = async (e) => {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    })
    setUsers([...users, newUser])
    history.push("/users")
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People}></Image>
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" type="text"></Input>
        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" type="number"></Input>
        <Button onClick={addNewUser}>
          Cadastrar<img alt="seta" src={Arrow}></img>
        </Button>
      </ContainerItens>
    </Container>
  )
}

export default App
