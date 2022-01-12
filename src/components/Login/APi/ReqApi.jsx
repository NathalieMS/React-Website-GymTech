import React, { useState } from 'react'
import Axios from 'axios'
import styled from 'styled-components'

function ReqApi() {
  const [alunos, setAlunos] = useState([])
  const Alunos = () => {
    Axios.get("https://api-academia-alunos.herokuapp.com/alunos").then((response) => {
      setAlunos(response.data.alunos);
      console.log (response)
    }
    )
  }

  const DelApi = (id) =>{
    Axios.delete(`https://api-academia-alunos.herokuapp.com/alunos/${id}`).then (() =>{
      Alunos ()
    })
  }

  const PutApi = (id) =>{
    Axios.put(`https://api-academia-alunos.herokuapp.com/alunos/${id}`).then (() =>{
      Alunos ()
    })
  }

  if (alunos) {
    console.log(alunos)
  }
  return (<Container>
    This is a<button onClick={Alunos}>GET</button>
    <div>
      {alunos.map((aluno) => {
        return <ul>
          <li>
            <p>{aluno.nome}</p>
          </li>
          <p>CPF: {aluno.cpf}</p>
          <p>Address: {aluno.endereco}</p>
          <p>State: {aluno.estado}</p>
          <p>Phone: {aluno.telefone}</p>
          <p>Email: {aluno.email}</p>
          <p>Plan: {aluno.plano}</p>

          This is a<button onClick={()=>DelApi(aluno.id)}>Delete</button> 
          This is a<button onClick={()=>PutApi(aluno.id)}>Edit</button> 
        </ul>
      })}
    </div>
  </Container>);
}

const Container = styled.div `
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(225deg, #ffc93f 0, #ffba41 12.5%, #ffaa43 25%, #ff9a45 37.5%, #f98946 50%, #eb7946 62.5%, #de6b47 75%, #d15e48 87.5%, #c65449 100%);
`

export default ReqApi;
