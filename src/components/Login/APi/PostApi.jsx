import React, { useState } from 'react'
import Axios from 'axios'

import './Api.scss'

function PostApi() {

    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [address, setAddress] = useState('')
    const [state, setState] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [plan, setPlan] = useState('')

    const Alunos = () => {
        Axios.post(`https://api-academia-alunos.herokuapp.com/alunos`, { nome: name, cpf: cpf, endereco: address, estado: state, telefone: phone, email: email, plano: plan }).then((response) => {
            console.log(response)
        }
        )
    }

    const handleChange = ({target: {value, name}}) => {

        console.log (value)
        
    //     const data = {
    //     name: () => setName(value),
    //     cpf: () => setCpf(value),
    //     address: setAddress(value),
    //     state: setState(value),
    //     phone: setPhone(value),
    //     email: setEmail(value),
    //     plan: setPlan(value),
    // }

    switch(name) {
        case 'name': 
        setName(value)
        break
        case 'cpf': 
        setCpf(value)
        break
        case 'address': 
        setAddress(value)
        break
        case 'state': 
        setState(value)
        break
        case 'phone': 
        setPhone(value)
        break
        case 'email': 
        setEmail(value)
        break
        case 'plan': 
        setPlan(value)
        break
        default: return null
    }


    console.log (handleChange)

    console.log (name)

    if (name === 'name') setName (value)
    if (name === 'cpf') setCpf (value)


    } 
    console.log ('nome:', name)
    console.log ('cpf:', cpf)
    console.log ('address:', address)
    console.log ('state:', state)
    console.log ('phone:', phone)
    console.log ('email:', email)
    console.log ('plan:', plan)

    return (<div>
        <div className='putCont'>
            <form>
                <label>Name</label>
                <input type='text' onChange={handleChange} name='name'/>
                <label>CPF</label>
                <input type='text' onChange={handleChange} name='cpf' />
                <label>Address</label>
                <input type='text' onChange={handleChange} name='address' />
                <label>State</label>
                <input type='text' onChange={handleChange} name='state' />
                <label>Phone</label>
                <input type='text' onChange={handleChange} name='phone' />
                <label>Email</label>
                <input type='email' onChange={handleChange} name='email' />
                <label>Plan</label>
                <input type='text' onChange={handleChange} name='plan' />
                
            </form>
            <button onClick={Alunos}>Save</button>
        </div>
    </div>);
}



export default PostApi;
