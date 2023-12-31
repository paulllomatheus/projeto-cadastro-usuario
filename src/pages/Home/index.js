import { React, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import People from "../../assets/people.svg"
import Arrow from "../../assets/arrow.svg"

import H1 from "../../components/Title"
import ContainerItens from "../../components/ContainerItens"
import { Container, Image, InputLabel, Input, Button } from "./styles"

const App = () => {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const navigate = useNavigate()

  const addNewUser = async (e) => {
    if (inputName.current.value === "" && inputAge.current.value === "") {
      alert("Insira o Nome e a Idade do usuário")
    } else if (inputName.current.value === "") {
      alert("Insira o Nome do usuário")
    } else if (inputAge.current.value === "") {
      alert("Insira a Idade do usuário")
    } else {
      const { data: newUser } = await axios.post(
        "http://localhost:3001/users",
        {
          name: inputName.current.value,
          age: inputAge.current.value,
        }
      )
      setUsers([...users, newUser])
      navigate("/users")
    }
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
