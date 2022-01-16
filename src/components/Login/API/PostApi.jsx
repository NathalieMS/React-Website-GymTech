import React, { useState } from 'react'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormInput,
  FormLabel,
  FormButtonSearch,
  LinkEdit
} from './StyledComponents'


function PostApi() {

  const [data, setData] = useState({
    nome: '',
    cpf: '',
    endereco: '',
    estado: '',
    telefone: '',
    email: '',
    plano: ''
  });



  const Alunos = (e) => {
    e.preventDefault()
    fetch('https://api-academia-alunos.herokuapp.com/alunos', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    }).then(x => x.json()).then(res => console.log(res))
  }



  const handleChange = ({ target: { value, name } }) => {

    // const handleOnChange = event => {
    setData({
      ...data, [name]: value,
    });
  }



  return (<Container>
    <FormWrap>
      <Icon to='/'>GymTech</Icon>
      <FormContent>

        <Form onSubmit={Alunos}>

          <FormLabel>Name</FormLabel>
          <FormInput type='text' onChange={handleChange} name='nome' />
          <FormLabel>CPF</FormLabel>
          <FormInput type='text' onChange={handleChange} name='cpf' />
          <FormLabel>Address</FormLabel>
          <FormInput type='text' onChange={handleChange} name='endereco' />
          <FormLabel>State</FormLabel>
          <FormInput type='text' onChange={handleChange} name='estado' />
          <FormLabel>Phone</FormLabel>
          <FormInput type='text' onChange={handleChange} name='telefone' />
          <FormLabel>Email</FormLabel>
          <FormInput type='email' onChange={handleChange} name='email' />
          <FormLabel>Membership</FormLabel>
          <FormInput type='text' onChange={handleChange} name='plano' />
          <FormButtonSearch>Save</FormButtonSearch>
        </Form>
        <LinkEdit to='/register' > List all members </LinkEdit>
      </FormContent>
     
    </FormWrap>
         
  </Container>);
}



export default PostApi;
/* att */
