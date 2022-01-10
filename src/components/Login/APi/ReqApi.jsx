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

  if (alunos) {
    console.log(alunos)
  }
  return (<div>
    This is a<button onClick={Alunos}>GET</button>
    <div>
      {alunos.map((aluno) => { return <ul><li><p>{aluno.nome}</p></li> <p>CPF: {aluno.cpf}</p><p>Adress: {aluno.cidade}</p><p>State: {aluno.estado}</p><p>Telephone: {aluno.telefone}</p><p>E-mail: {aluno.email}</p><p> Plan: {aluno.plano}</p></ul> })}
    </div>
  </div>);
}

export default ReqApi;
