import React, { useState } from 'react'
import Axios from 'axios'

import './Api.scss'

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
      console.log(response)
    }
    )
  }

  const DelApi = (id) => {
    Axios.delete(`https://api-academia-alunos.herokuapp.com/alunos/${id}`).then(() => {
      Alunos()
    })
  }

  const PutApi = (id) => {
    Axios.put(`https://api-academia-alunos.herokuapp.com/alunos/${id}`, {
      nome: name,
      cpf: cpf,
      endereco: address,
      estado: state,
      telefone: phone,
      email: email,
      idade: null,
      plano: plan
    }).then(() => {
      Alunos()
    })
  }

  function handleChange({ target: { name, value } }) {
    if (name === 'name') setName(value)
    if (name === 'cpf') setCpf(value)
    if (name === 'adress') setAddress(value)
    if (name === 'state') setState(value)
    if (name === 'phone') setPhone(value)
    if (name === 'email') setEmail(value)
    if (name === 'plan') setPlan(value)
  }

  return (
    <>
            <div className="container">
                <div className='FormWrap'>
                    <div className='Icon' to='/'>GymTech</Icon>
                    <div className='FormContent'>
                        <div className='Form'>
                            <div className='FormH1'>Restricted Area</FormH1>
                            <div className='FormLabel'>E-mail</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </div>
        </>

    <div className='background'>
      <div className='searchButt'>
        <button className='formButton' onClick={Alunos}>Search</button>
      </div>
      <div className='formCont'>
        <div className='formWrap'>
          {alunos.map((aluno) => {
            return <ul>
              <div className='section'>
                <div>
                  <label className='formLabel'>Name: </label>
                </div>
                <input className='formInput' type="text" name="name"
                  placeholder={aluno.nome}
                  disabled={disabledNome}
                  onChange={handleChange} />
                <button className='formButton' onClick={() => setDisabledNome(!disabledNome)}>Editar</button>
              </div>
              <div className='section'>
                <div>
                  <label className='formLabel'>Cpf: </label>
                </div>
                <input className='formInput'
                  type="text" name="cpf"
                  placeholder={aluno.cpf}
                  disabled={disabledCPF}
                  onChange={handleChange}
                />
                <button className='formButton' onClick={() => setDisabledCPF(!disabledCPF)}>Editar</button>

              </div>

              <div className='section'>
                <div>
                  <label className='formLabel'>Address: </label>
                </div>
                <input className='formInput'
                  type="text" name="address"
                  placeholder={aluno.endereco}
                  disabled={disabledEndereco}
                  onChange={handleChange}
                />
                <button className='formButton' onClick={() => setDisabledEndereco(!disabledEndereco)}>Editar</button>

              </div>

              <div className='section'>
                <div>
                  <label className='formLabel'>State:  </label>
                </div>
                <input className='formInput'
                  type="text" name="state"
                  placeholder={aluno.estado}
                  disabled={disabledEstado}
                  onChange={handleChange}
                />
                <button className='formButton' onClick={() => setDisabledEstado(!disabledEstado)}>Editar</button>

              </div>

              <div className='section'>
                <div>
                  <label className='formLabel'>Phone: </label>
                </div>
                <input className='formInput'
                  type="text" name="phone"
                  placeholder={aluno.telefone}
                  disabled={disabledTelefone}
                  onChange={handleChange}
                />
                <button className='formButton' onClick={() => setDisabledTelefone(!disabledTelefone)}>Editar</button>

              </div>

              <div className='section'>
                <div>
                  <label className='formLabel'>Email: </label>
                </div>
                <input className='formInput'
                  type="email" name="email"
                  placeholder={aluno.email}
                  disabled={disabledEmail}
                  onChange={handleChange}
                />
                <button className='formButton' onClick={() => setDisabledEmail(!disabledEmail)}>Editar</button>

              </div>

              <div className='section'>
                <div>
                  <label className='formLabel'>Plan: </label>
                </div>
                <input className='formInput'
                  type="text" name="plan"
                  placeholder={aluno.plano}
                  disabled={disabledPlano}
                  onChange={handleChange}
                />
                <button className='formButton' onClick={() => setDisabledPlano(!disabledPlano)}>Editar</button>

              </div>

              This is a<button className='formButton' onClick={() => DelApi(aluno.id)}>Delete</button>
              This is a<button className='formButton' onClick={() => PutApi(aluno.id)}>Edit</button>
            </ul>
          })}
        </div>
      </div>
    </div>);
}

export default ReqApi;
