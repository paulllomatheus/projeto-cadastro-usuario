import { React, useState, useEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import axios from "axios"

import Avatar from "../../assets/avatar.svg"
import Arrow from "../../assets/arrow.svg"
import Trash from "../../assets/trash.svg"

import { Container, Image, ContainerItens, H1, Button, User } from "./styles"

const Users = () => {
  const [users, setUsers] = useState([])
  const history = useHistory()

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
    history.push("/")
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar}></Image>
      <ContainerItens>
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
