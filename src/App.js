import React, { useEffect, useState } from 'react';
import './App.css';
import {pegaLista} from "./service/lista"


function App() {
  const [alert, serAlert]= useState(false);
  const [itemInput, setItemInput] = useState('');
  const [list, fazLista] = useState([]);
  let montado =true;
  
  useEffect(() =>{
    pegaLista()
    .then(aluno =>{
      if(montado){
        fazLista(aluno)
      }
    })
    return () => montado = false;
  },[])

  return(
    <div className= "wrapper">
    <h1>Lista de alunos</h1>
    <ul>
      {list.map(aluno => <li key={aluno.aluno}>{aluno.aluno}</li>)}
    </ul>
    <form>
       <label>
         <p>Novo Item</p>
         <input type="text" />
       </label>
       <button type="submit">Submit</button>
     </form>
    </div>
  )
}
export default App;
