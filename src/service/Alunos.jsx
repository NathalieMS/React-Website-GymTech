import axios from "axios"

const url= "https://api-academia-alunos.herokuapp.com/alunos"

const Alunos= {
    async listAlunos() {
        const endpoint = `${url}`
        return axios.get(endpoint)
      },
    

    async listAluno(alunoEmail) {
        const endpoin = `${url}/${alunoEmail}`
        return axios.get(endpoin)
      },

      async addAluno (data) {
        return axios({
          method: 'post',
          baseURL:url,
          data: data
        })
      },

      async editAluno (alunoEmail, data) {
        const endpoin = `/${alunoEmail}`
        return axios({
          method: 'put',
          url: 'https://api-academia-alunos.herokuapp.com/alunos'+ endpoin,
          data: data
        })
      },

      async deleteAluno (alunoEmail) {
        const endpoin = `/${alunoEmail}`
        return axios({
          method: 'delete',
          url:endpoin,
          baseURL: url,
        })
      },
    }
export default Alunos
//nome, cpf, endereco, numero, bairro, cidade, estado, telefone, email, idade, plano