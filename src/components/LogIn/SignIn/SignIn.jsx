import React from 'react'
import './style.css'

function SignIn() {
    return (
        <form>
            <label for='nome'>Name</label>
            <input type='text' id='nome' />
            <label for='cpf'>CPF</label>
            <input type='text' id='cpf' />
            <label for='telefone'>Telephone</label>
            <input type='text' id='telefone' />
            <label for='email'>email</label>
            <input type='text' id='email' />
            <label for='senha'>Password</label>
            <input type='text' id='senha' />
        </form>
    )
}

export default SignIn