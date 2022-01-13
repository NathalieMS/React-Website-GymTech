import React, { useState } from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormInput,
    FormLabel,
    FormButtonSearch
  } from './StyledComponents'

// import './Api.scss'

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

    // const [name, setName] = useState('')
    // const [cpf, setCpf] = useState('')
    // const [address, setAddress] = useState('')
    // const [state, setState] = useState('')
    // const [phone, setPhone] = useState('')
    // const [email, setEmail] = useState('')
    // const [plan, setPlan] = useState('')

    const Alunos = (e) => {
    e.preventDefault()
    fetch('https://api-academia-alunos.herokuapp.com/alunos', {
        method: 'POST',
        body: JSON.stringify (data),
        headers: {'Content-Type': 'application/json'}
    }).then(x => x.json ()).then(res => console.log(res))
}

    // const Alunos = (e) => {
    //     e.preventDefault()
    //     Axios.post(`https://academia-api-t8.herokuapp.com/alunos`, { nome: name, cpf: cpf, endereco: address, estado: state, telefone: phone, email: email, plano: plan }).then((response) => {
    //         console.log(response)
    //     }
    //     )
    // }

    const handleChange = ({target: {value, name}}) => {

        // const handleOnChange = event => {
              setData({
                ...data, [name]: value,
              });
          }
        
    //     const data = {
    //     name: () => setName(value),
    //     cpf: () => setCpf(value),
    //     address: setAddress(value),
    //     state: setState(value),
    //     phone: setPhone(value),
    //     email: setEmail(value),
    //     plan: setPlan(value),
    // }

    // switch(name) {
    //     case 'name': 
    //     setName(value)
    //     break
    //     case 'cpf': 
    //     setCpf(value)
    //     break
    //     case 'address': 
    //     setAddress(value)
    //     break
    //     case 'state': 
    //     setState(value)
    //     break
    //     case 'phone': 
    //     setPhone(value)
    //     break
    //     case 'email': 
    //     setEmail(value)
    //     break
    //     case 'plan': 
    //     setPlan(value)
    //     break
    //     default: return null
    // }

    // if (name === 'name') setName (value)
    // if (name === 'cpf') setCpf (value)


    // } 
    // console.log ('nome:', name)
    // console.log ('cpf:', cpf)
    // console.log ('address:', address)
    // console.log ('state:', state)
    // console.log ('phone:', phone)
    // console.log ('email:', email)
    // console.log ('plan:', plan)

    return (<Container>
        <FormWrap>
      <Icon to='/'>GymTech</Icon>
        <FormContent>

            <Form onSubmit={Alunos}>

                <FormLabel>Name</FormLabel>
                <FormInput type='text' onChange={handleChange} name='nome'/>
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
            </FormContent>

        </FormWrap>
    </Container>);
}



export default PostApi;
