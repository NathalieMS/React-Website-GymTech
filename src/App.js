import React, { useEffect, useState } from 'react';
import './App.css';
import {PegaLista} from "./service/lista"


function App() {
  const [alert, serAlert]= useState(false);
  const [itemInput, setItemInput] = useState('');
  const [list, FazLista] = useState([]);
  let montado =true;
  
  useEffect(() =>{
    PegaLista()
    .then(aluno =>{
      if(montado){
        FazLista(aluno)
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
