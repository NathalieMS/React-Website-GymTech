import React, { useState } from 'react'
import Axios from 'axios'

function DelApi() {
    const [alunos] = useState([])
    const Alunos = () => {
        Axios.delete(`https://api-academia-alunos.herokuapp.com/alunos/${'nome'}`)
    }

        return (<div>
            <div>

                <button onClick={Alunos}>Save</button>
            </div>
        </div>);
    }


export default DelApi;