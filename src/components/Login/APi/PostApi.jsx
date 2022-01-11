import React, { useState } from 'react'
import Axios from 'axios'
import { CheckBoxSharp } from '@material-ui/icons'

function PostApi() {
    const [alunos] = useState([])
    const Alunos = () => {
        Axios.post(`https://api-academia-alunos.herokuapp.com/alunos`, { nome: document.getElementById('nome').value, cpf: document.getElementById('cpf').value, endereco: document.getElementById('endereco').value, estado: document.getElementById('estado').value, telefone: document.getElementById('telefone').value, email: document.getElementById('email').value, plano: document.getElementById('plano').value }).then((response) => {
            alert(response);
        }
        )
    }

    if (alunos) {
        console.log(alunos)
    }
    return (<div>
        <div>
            <form>
                <label>Name</label>
                <input type='text' id='nome' />
                <label>CPF</label>
                <input type='text' id='cpf' />
                <label>Address</label>
                <input type='text' id='endereco' />
                <label>State</label>
                <input type='text' id='estado' />
                <label>Phone</label>
                <input type='text' id='telefone' />
                <label>Email</label>
                <input type='email' id='email' />
                <label>Plan</label>
                <input type='text' id='plano' />
                
            </form>
            <button onClick={Alunos}>Save</button>
        </div>
    </div>);
}

export default PostApi;
