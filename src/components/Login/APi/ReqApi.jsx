import React, { useState} from 'react'
import Axios from 'axios'
import {
  Container,
  FormWrap,
  Icon,
  FormButton,
  FormContent,
  FormEditInput,
  Form,
  FormInput,
  FormLabel,
  EditButton,
  FormButtonSearch
} from './StyledComponents'
import { Loading } from './Loading';

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
    setIsLoading(false);
    Axios.get("https://api-academia-alunos.herokuapp.com/alunos").then((response) => {
      setAlunos(response.data.alunos);
      setIsLoading(true);
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
      plano: plan
  }).then (() =>{
      Alunos ()
    })
  }
 
  const [isLoading, setIsLoading] = useState(true);

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

    <FormButtonSearch onClick={Alunos}>List all members:</FormButtonSearch>

{ isLoading ?  alunos.map((aluno) => {
        
        
 
        return <>
       <Form>


            <FormLabel>Name: </FormLabel>
            <FormEditInput>
            <FormInput type="text" name="name"
            placeholder={aluno.nome}
            disabled={disabledNome}
            onChange={handleChange} />
            <EditButton onClick={() => setDisabledNome(!disabledNome)}><BsPencilSquare /></EditButton>
            </FormEditInput>
         
         
          <FormLabel>Social Number: </FormLabel>
          <FormEditInput>
          <FormInput
            type="text" name="cpf"
            placeholder={aluno.cpf}
            disabled={disabledCPF}
            onChange={handleChange}
            />
          <EditButton onClick={() => setDisabledCPF(!disabledCPF)}><BsPencilSquare /></EditButton>
            </FormEditInput>

         
          <FormLabel>Address: </FormLabel>
          <FormEditInput>
          <FormInput
            type="text" name="address"
            placeholder={aluno.endereco}
            disabled={disabledEndereco}
            onChange={handleChange}
            />
          <EditButton onClick={() => setDisabledEndereco(!disabledEndereco)}><BsPencilSquare /></EditButton>
            </FormEditInput>
         
          <FormLabel>State:  </FormLabel>
          <FormEditInput>
          <FormInput
            type="text" name="state"
            placeholder={aluno.estado}
            disabled={disabledEstado}
            onChange={handleChange}
            />
          <EditButton onClick={() => setDisabledEstado(!disabledEstado)}><BsPencilSquare /></EditButton>
            </FormEditInput>
        
         
          <FormLabel>Phone: </FormLabel>
          <FormEditInput>
          <FormInput
            type="text" name="phone"
            placeholder={aluno.telefone}
            disabled={disabledTelefone}
            onChange={handleChange}
            />
          <EditButton onClick={() => setDisabledTelefone(!disabledTelefone)}><BsPencilSquare /></EditButton>
            </FormEditInput>
         
          <FormLabel>Email: </FormLabel>
          <FormEditInput>
          <FormInput
            type="email" name="email"
            placeholder={aluno.email}
            disabled={disabledEmail}
            onChange={handleChange}
            />
          <EditButton onClick={() => setDisabledEmail(!disabledEmail)}><BsPencilSquare /></EditButton>
            </FormEditInput>
        
       
          <FormLabel>Membership: </FormLabel>
          <FormEditInput>
          <FormInput
            type="text" name="plan"
            placeholder={aluno.plano}
            disabled={disabledPlano}
            onChange={handleChange}
            />
          <EditButton onClick={() => setDisabledPlano(!disabledPlano)}><BsPencilSquare /></EditButton>
            </FormEditInput>
         

          <FormButton className='buttonCont' onClick={()=>DelApi(aluno.id)}>Delete member</FormButton>
          <FormButton onClick={()=>PutApi(aluno.id)}>Reset member</FormButton>

          </Form>
          </>
      
      }) : <Loading /> 


}
 

      
     
      </FormContent>
  </FormWrap>
  </Container>

  );
    }
 
export default ReqApi;