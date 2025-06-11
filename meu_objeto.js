let curso = {
    curso : 'Desenvolvimento web',
    professor: {
        nome: 'Angelo',
        idade: 30,
        email: 'XXXXXXXXXXXXXXXX',
        fone: '123456789',
        endereco: {
            rua: 'Rua A',
            numero: 123,
            bairro: 'Centro',
            cidade: 'São Paulo',
            estado: 'SP',
            cep: '12345-678'
        }
        
    },
    turno: 'noite',
    turma: 'fs25',
    valor:'2.500',
    sala:{
        nome:'Gracy Hopper',
        numero: 7,
        andar: 4,
        capacidade: 35,
    },
    projetor: true


}
console.log(curso)
console.log(curso.professor)