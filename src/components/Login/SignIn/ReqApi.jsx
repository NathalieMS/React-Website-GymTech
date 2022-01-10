import React, {useState} from 'react'
import Axios from 'axios'

function ReqApi() {
    const [alunos, setAlunos] = useState([])
    const Alunos = () => {
      Axios.get("https://api-academia-alunos.herokuapp.com/alunos").then((response) => {
        setAlunos(response.data.alunos);
      }
      )
    }
  
    if (alunos){
        console.log(alunos)
    }
    return( <div>
      Deu certo! <button onClick={Alunos}>Buscar</button>
      <div>
        {alunos.map((aluno)=> {return<p>{aluno.nome}</p>})}
      </div>
      </div>);
  }
  
  export default ReqApi;
