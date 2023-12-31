import { React, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import Avatar from "../../assets/avatar.svg"
import Arrow from "../../assets/arrow.svg"
import Trash from "../../assets/trash.svg"

import ContainerItens from "../../components/ContainerItens"
import H1 from "../../components/Title"
import { Container, Image, Button, User } from "./styles"

const Users = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")

      setUsers(newUsers)
    }

    fetchUsers()
  }, [])

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId)
    setUsers(newUsers)
  }

  const goBackPage = () => {
    navigate("/")
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar}></Image>
      <ContainerItens isblur={"true"}>
        <H1>Usuários</H1>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="trash" src={Trash}></img>
              </button>
            </User>
          ))}
        </ul>
        <Button onClick={goBackPage}>
          <img alt="seta" src={Arrow}></img>
          Voltar
        </Button>
      </ContainerItens>
    </Container>
  )
}

export default Users
