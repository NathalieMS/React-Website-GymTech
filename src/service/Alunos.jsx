import React, { useState, useEffect } from 'react'

const LISTA_ALUNOS = 'https://api-academia-alunos.herokuapp.com/alunos'


export default function Alunos() {
  const [aluno, setAlunos] = useState({alunos: []})

  const reqAlunos = async (url) => {
      const response = await fetch(url)
      const json = await response.json()
      console.log(response)
      setAlunos(json)
  }

  useEffect(() => {
      reqAlunos(LISTA_ALUNOS)
  }, [])
  
  const { idAlunos, strNome, strCPF, strEndereco, strNumero, strBairro, strCidade, strEstado, strTelefone, strEmail, strIdade, strPlano } = aluno.alunos[0] || {}

  return (
      <div>
          <p>Nome: <strong>{strNome}</strong></p>
          <p>CPF: {strCPF}</p>
          <p>Endereço: {strEndereco}</p>
          <p>Numero: {strNumero}</p>
          <p>Bairro: {strBairro}</p>
          <p>Cidade: {strCidade}</p>
          <p>Estado: {strEstado}</p>
          <p>Telefone: {strTelefone}</p>
          <p>Email: {strEmail}</p>
          <p>Idade: {strIdade}</p>
          <p>Plano: {strPlano}</p>
          <p>ID: {idAlunos}</p>
          <button onClick={() => reqAlunos(LISTA_ALUNOS)}>Buscar outro aluno.</button>
      </div>
  )
}





// import axios from "axios"

// const url= "https://dashboard.heroku.com/apps/api-academia-alunos"

// const Alunos= {
//     async listAlunos() {
//         const endpoint = `${url}`
//         return axios.get(endpoint)
//       },
    

//     async listAluno(alunoEmail) {
//         const endpoint = `${url}/${alunoEmail}`
//         return axios.get(endpoint)
//       },

//       async addAluno (data) {
//         return axios({
//           method: 'post',
//           baseURL:url,
//           data: data
//         })
//       },

//       async editAluno (alunoEmail, data) {
//         const endpoint = `/${alunoEmail}`
//         return axios({
//           method: 'put',
//           url: 'https://dashboard.heroku.com/apps/api-academia-alunos'+ endpoint,
//           data: data
//         })
//       },

//       async deleteAluno (alunoEmail) {
//         const endpoint = `/${alunoEmail}`
//         return axios({
//           method: 'delete',
//           url:endpoint,
//           baseURL: url,
//         })
//       },
//     }
// export default Alunos
// //nome, cpf, endereco, numero, bairro, cidade, estado, telefone, email, idade, plano