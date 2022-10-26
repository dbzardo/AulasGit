let bancoDeDados = require('./database/user.json')

const listarUsuariosMaioresDeIdade = () => {
    // 1- Filtro os usuários
    // 2- Retorno mapeando e trazendo apenas o nome
    const lista = bancoDeDados.filter((usuario) => usuario.idade > 18).map((usuario) => usuario.nome) 

    return lista;
}

console.log('Lista de usuários acima de 18: ', listarUsuariosMaioresDeIdade());