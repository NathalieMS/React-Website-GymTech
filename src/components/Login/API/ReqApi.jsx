import React, { useState} from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
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
// import { Loading } from './Loading';
import { Loading } from './Loading'
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
 
  const [data, setData] = useState({
    nome: '',
    cpf: '',
    endereco: '',
    estado: '',
    telefone: '',
    email: '',
    plano: ''
  });


  // estados de campos
  // const [name, setName] = useState('')
  // const [cpf, setCpf] = useState('')
  // const [address, setAddress] = useState('')
  // const [state, setState] = useState('')
  // const [phone, setPhone] = useState('')
  // const [plan, setEmail] = useState('')
  // const [email, setPlan] = useState('')
 
 
 
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
    Axios.put(`https://api-academia-alunos.herokuapp.com/alunos/${id}`,
    data 
  , {'Content-Type': 'application/json'}).then (() =>{
      Alunos ()
    })
  }
 
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = ({target: {value, name}}) => {

          setData({
            ...data, [name]: value,
          });
      }

  // function handleChange({target: { name, value }}) {
  //   if(name === 'name') setName(value)
  //   if(name === 'cpf') setCpf(value)
  //   if(name === 'adress') setAddress(value)
  //   if(name === 'state') setState(value)
  //   if(name === 'phone') setPhone(value)
  //   if(name === 'email') setEmail(value)
  //   if(name === 'plan') setPlan(value)
  // }

  console.log(alunos)
return (
 
  <Container>
  <FormWrap>
      <Icon to='/'>GymTech</Icon>
 
    <FormContent>

    <FormButtonSearch onClick={Alunos}>List all members:</FormButtonSearch>

{ isLoading ?  alunos.map((aluno) => {
 
        return <>
       <Form onSubmit={(e) => {
         e.preventDefault()
         PutApi(aluno.id)
       }}>


            <FormLabel>Name: </FormLabel>
            <FormEditInput>
            <FormInput type="text" name="nome"
            placeholder={aluno.nome}
            disabled={disabledNome}
            onChange={handleChange}

             />
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
            type="text" name="endereco"
            placeholder={aluno.endereco}
            disabled={disabledEndereco}
            onChange={handleChange}

            />
          <EditButton onClick={() => setDisabledEndereco(!disabledEndereco)}><BsPencilSquare /></EditButton>
            </FormEditInput>
         
          <FormLabel>State:  </FormLabel>
          <FormEditInput>
          <FormInput
            type="text" name="cidade"
            placeholder={aluno.estado}
            disabled={disabledEstado}
            onChange={handleChange}

            />
          <EditButton onClick={() => setDisabledEstado(!disabledEstado)}><BsPencilSquare /></EditButton>
            </FormEditInput>
        
         
          <FormLabel>Phone: </FormLabel>
          <FormEditInput>
          <FormInput
            type="text" name="telefone"
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
            type="text" name="plano"
            placeholder={aluno.plano}
            disabled={disabledPlano}
            onChange={handleChange}

            />
          <EditButton onClick={() => setDisabledPlano(!disabledPlano)}><BsPencilSquare /></EditButton>
            </FormEditInput>
         

          <FormButton type='button' className='buttonCont' onClick={()=>DelApi(aluno.id)}>Delete member</FormButton>
          <FormButton type='submit'>Reset member</FormButton>

          </Form>
          </>
      
      }) : <Loading /> 


}
      <Link to='/post'><FormButtonSearch>Register</FormButtonSearch></Link>
      </FormContent>
  </FormWrap>
  </Container>

  );
    }
 
export default ReqApi;
/* att */
