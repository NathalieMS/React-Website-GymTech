import React, { useState, useRef } from 'react'
import Axios from 'axios'
import styled from 'styled-components'

function ReqApi() {
  const [alunos, setAlunos] = useState([])
  // estados de disabled
  const [disabledNome, setDisabledNome] = useState(true)
  const [disabledCPF, setDisabledCPF] = useState(true)
  const [disabledEndereco, setDisabledEndereco] = useState(true)
  const [disabledEstado, setDisabledEstado] = useState(true)
  const [disabledTelefone, setDisabledTelefone] = useState(true)
  const [disabledEmail, setDisabledEmail] = useState(true)
  const [disabledPlano, setDisabledPlano] = useState(true)

  // estados de campos
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [address, setAddress] = useState('')
  const [state, setState] = useState('')
  const [phone, setPhone] = useState('')
  const [plan, setEmail] = useState('')
  const [email, setPlan] = useState('')
  
  

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
    Axios.put(`https://api-academia-alunos.herokuapp.com/alunos/${id}`, {
      nome: name,
      cpf: cpf,
      endereco: address,
      estado: state,
      telefone: phone,
      email: email,
      idade: null,
      plano: plan
  }).then (() =>{
      Alunos ()
    })
  }

  function handleChange({target: { name, value }}) {
    if(name === 'name') setName(value)
    if(name === 'cpf') setCpf(value)
    if(name === 'adress') setAddress(value)
    if(name === 'state') setState(value)
    if(name === 'phone') setPhone(value)
    if(name === 'email') setEmail(value)
    if(name === 'plan') setPlan(value)
  }

  return (<Container>
    This is a<button onClick={Alunos}>GET</button>
    <div>
      {alunos.map((aluno) => {
        return <ul>
          <li>
            <input type="text" name="name" placeholder={aluno.nome} disabled={disabledNome} />
          </li>
          <p>CPF: {aluno.cpf}</p>
          <input
            type="text"
            name="cpf"
            placeholder={aluno.cpf}
            disabled={disabledCPF}
            onChange={handleChange}
            />
          {/* repetir botao de edicao para todos */}
          <button onClick={() => setDisabledCPF(!disabledCPF)}>Editar</button>
          <input type="text" name="address" value={aluno.endereco} disabled={disabledEndereco} />
          <input type="text" name="state" value={aluno.estado} disabled={disabledEstado} />
          <input type="text" name="phone" value={aluno.telefone} disabled={disabledTelefone} />
          <input type="text" name="email" value={aluno.email} disabled={disabledEmail} />
          <input type="text" name="plan" value={aluno.plano} disabled={disabledPlano} />

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
