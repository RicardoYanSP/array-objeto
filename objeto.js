//1- Criando um objeto, que é um tipo de dado
let pessoa = {
    nome: 'Ana',
    cpf: '99966655512',
    genero: 'f',
    idade: 25,
    altura: 1.65,
    dataDeNascimento: '25/12/1998',
    // endereco: 'Rua 01,casa 02, Messejana, Fortaleza, Ceará',
    endereco: {
        rua: 'Rua 01',
        numero: 'casa 02',
        bairro: 'Messejana',
        cidade: 'Fortaleza',
        estado: 'Ceará'
    },
    adicionar: function(){
        console.log('Adicionando...')
    },
    remover: function(){
        console.log('Removendo...')
    },
    telefone: '999998888',
    email: 'ricardo@ig.com',
    tamanhos: ['G, GG'],
    contato:{
        telefone: '999998888',
        email: 'XXXXXXXXXXXXXX'
    }
}
// console.log(pessoa)

// 2.Acessando os dados do objeto
console.log(pessoa.dataDeNascimento)
console.log(pessoa.contato.email)
console.log(pessoa.endereco.estado)
