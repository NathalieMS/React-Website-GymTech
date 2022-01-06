export function PegaLista() {
    return fetch('https://dashboard.heroku.com/apps/api-academia-alunos')
      .then(data => data.json())
  }