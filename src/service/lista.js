export function PegaLista() {
    return fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(data => data.json())
  }