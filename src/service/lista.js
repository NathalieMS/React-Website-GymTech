export function PegaLista() {
    return fetch('https://api-academia-alunos.herokuapp.com')
      .then(data => data.json())
  }