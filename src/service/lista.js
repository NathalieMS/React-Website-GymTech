export function PegaLista() {
    return fetch('https://api-academia-alunos.herokuapp.com/alunos')
      .then(data => data.json())
  }