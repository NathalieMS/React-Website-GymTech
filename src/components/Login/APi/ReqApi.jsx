import React, { useState} from 'react'
import Axios from 'axios'
import {
  Container,
  FormWrap,
  Icon,
  FormButton,
  FormContent,
  Form,
  FormInput,
  FormLabel,
  EditButton,
  FormButtonSearch
} from './StyledComponents'

import { BsPencilSquare } from "react-icons/bs";
 
// import './Api.scss'
 
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
return (
 
  <Container>
  <FormWrap>
      <Icon to='/'>GymTech</Icon>
 
    <FormContent>

    <FormButtonSearch onClick={Alunos}>Search</FormButtonSearch>

      {alunos.map((aluno) => {
 
        return <>
       <Form>


            <FormLabel>Name: </FormLabel>
            <FormInput type="text" name="name"
            placeholder={aluno.nome}
            disabled={disabledNome}
            onChange={handleChange} />
            <EditButton onClick={() => setDisabledNome(!disabledNome)}><BsPencilSquare /></EditButton>
         
         
          <FormLabel>Cpf: </FormLabel>
          <FormInput
            type="text" name="cpf"
            placeholder={aluno.cpf}
            disabled={disabledCPF}
            onChange={handleChange}
            />
          <EditButton onClick={() => setDisabledCPF(!disabledCPF)}><BsPencilSquare /></EditButton>

         
          <FormLabel>Address: </FormLabel>
          <FormInput
            type="text" name="address"
            placeholder={aluno.endereco}
            disabled={disabledEndereco}
            onChange={handleChange}
            />
          <EditButton onClick={() => setDisabledEndereco(!disabledEndereco)}><BsPencilSquare /></EditButton>
         
          <FormLabel>State:  </FormLabel>
          <FormInput
            type="text" name="state"
            placeholder={aluno.estado}
            disabled={disabledEstado}
            onChange={handleChange}
            />
          <EditButton onClick={() => setDisabledEstado(!disabledEstado)}><BsPencilSquare /></EditButton>
        
         
          <FormLabel>Phone: </FormLabel>
          <FormInput
            type="text" name="phone"
            placeholder={aluno.telefone}
            disabled={disabledTelefone}
            onChange={handleChange}
            />
          <EditButton onClick={() => setDisabledTelefone(!disabledTelefone)}><BsPencilSquare /></EditButton>
         
          <FormLabel>Email: </FormLabel>
          <FormInput
            type="email" name="email"
            placeholder={aluno.email}
            disabled={disabledEmail}
            onChange={handleChange}
            />
          <EditButton onClick={() => setDisabledEmail(!disabledEmail)}><BsPencilSquare /></EditButton>
        
       
          <FormLabel>Plan: </FormLabel>
          <FormInput
            type="text" name="plan"
            placeholder={aluno.plano}
            disabled={disabledPlano}
            onChange={handleChange}
            />
          <EditButton onClick={() => setDisabledPlano(!disabledPlano)}><BsPencilSquare /></EditButton>
         

          <FormButton className='buttonCont' onClick={()=>DelApi(aluno.id)}>Delete member</FormButton>
          <FormButton onClick={()=>PutApi(aluno.id)}>Reset member</FormButton>

          </Form>
          </>
      
      })}
      </FormContent>
  </FormWrap>
  </Container>

  );
    }
 
export default ReqApi;