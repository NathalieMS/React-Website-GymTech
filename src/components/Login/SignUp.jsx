import React, {useState} from "react";

// import SignIn from "./SignIn/SignIn";
// import styles from "./Cadastro.module.css";


function SignUp() {
    const [alunos, setAlunos] = useState([])
    const Alunos = () => {
      Axios.post("https://api-academia-alunos.herokuapp.com/alunos").then((response) => {
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
        {alunos.map((aluno)=> {return<p>{aluno.cpf}</p>})}
      </div>
      </div>);
  }
  
  export default SignUp;
