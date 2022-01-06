<<<<<<< HEAD
import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/pages';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}
=======
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
>>>>>>> 6342f1e269032f64fe12679278e5f07bd69b352b

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
