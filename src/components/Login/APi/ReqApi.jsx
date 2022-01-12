import React, { useState} from 'react'
import Axios from 'axios'
import styled from 'styled-components'

import './ReqApi.scss'

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

  return (<div className='conteiner'>
    <div className='searchButt'>
    <button onClick={Alunos}>Search</button>
    </div>
    <div className='formCont'>
    <div className='section'>
      {alunos.map((aluno) => {
        return <ul>
          <div className='section'>
          <li>
            <label>Name: </label>
            <input type="text" name="name" 
            placeholder={aluno.nome} 
            disabled={disabledNome} 
            onChange={handleChange} />
            <button onClick={() => setDisabledNome(!disabledNome)}>Editar</button>
          </li>
          </div>
          <div className='section'>
          <li>
          <label>Cpf: </label>
          <input
            type="text" name="cpf"
            placeholder={aluno.cpf}
            disabled={disabledCPF}
            onChange={handleChange}
            />
          <button onClick={() => setDisabledCPF(!disabledCPF)}>Editar</button>
          </li>
          </div>

          <div className='section'>
          <li>
          <label>Address: </label>
          <input
            type="text" name="address"
            placeholder={aluno.endereco}
            disabled={disabledEndereco}
            onChange={handleChange}
            />
          <button onClick={() => setDisabledEndereco(!disabledEndereco)}>Editar</button>
          </li>
          </div>

          <div className='section'>
          <li>
          <label>State:  </label>
          <input
            type="text" name="state"
            placeholder={aluno.estado}
            disabled={disabledEstado}
            onChange={handleChange}
            />
          <button onClick={() => setDisabledEstado(!disabledEstado)}>Editar</button>
          </li>
          </div>

          <div className='section'>
          <li>
          <label>Phone: </label>
          <input
            type="text" name="phone"
            placeholder={aluno.telefone}
            disabled={disabledTelefone}
            onChange={handleChange}
            />
          <button onClick={() => setDisabledTelefone(!disabledTelefone)}>Editar</button>
          </li>
          </div>

          <div className='section'>
          <li>
          <label>Email: </label>
          <input
            type="email" name="email"
            placeholder={aluno.email}
            disabled={disabledEmail}
            onChange={handleChange}
            />
          <button onClick={() => setDisabledEmail(!disabledEmail)}>Editar</button>
          </li>
          </div>
          
          <div className='section'>
          <li>
          <label>Plan: </label>
          <input
            type="text" name="plan"
            placeholder={aluno.plano}
            disabled={disabledPlano}
            onChange={handleChange}
            />
          <button onClick={() => setDisabledPlano(!disabledPlano)}>Editar</button>
          </li>
          </div>

          This is a<button className='buttonCont' onClick={()=>DelApi(aluno.id)}>Delete</button> 
          This is a<button onClick={()=>PutApi(aluno.id)}>Edit</button> 
        </ul>
      })}
    </div>
    </div>
  </div>);
}

export default ReqApi;
