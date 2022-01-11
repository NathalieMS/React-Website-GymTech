import React, { useState } from 'react'
import Axios from 'axios'

function ReqApi() {
  const [alunos, setAlunos] = useState([])
  const Alunos = () => {
    Axios.get("https://api-academia-alunos.herokuapp.com/alunos").then((response) => {
      setAlunos(response.data.alunos);
    }
    )
  }

  const DelApi = (id) =>{
    Axios.delete(`https://api-academia-alunos.herokuapp.com/alunos/${id}`).then (() =>{
      Alunos ()
    })
  }

  const PutApi = (id) =>{
    Axios.delete(`https://api-academia-alunos.herokuapp.com/alunos/${id}`).then (() =>{
      Alunos ()
    })
  }

  if (alunos) {
    console.log(alunos)
  }
  return (<div>
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
          <p>Telephone: {aluno.telefone}</p>
          <p>E-mail: {aluno.email}</p>
          <p>Plan: {aluno.plano}</p>

          This is a<button onClick={()=>DelApi(aluno.id)}>Delete</button> 
          This is a<button onClick={()=>PutApi(aluno.id)}>Edit</button> 
        </ul>
      })}
    </div>
  </div>);
}

export default ReqApi;
