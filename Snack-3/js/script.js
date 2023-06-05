//variabile oggetti
let bici = [
    {
        nome: 'bianchi',
        peso: '15'
    },

    {
        nome: 'olmo',
        peso: '25'
    },
    
    {
        nome: 'atala',
        peso: '13'
    },

    {
        nome: 'casati',
        peso: '10'
    },

    {
        nome: 'bottecchia',
        peso: '18'
    },

    {
        nome: 'colnago',
        peso: '9'
    },
];
console.log(bici)

//variabile peso minore
let peso_minore = bici[0];

//ciclo per prendere il peso minore
bici.forEach(({nome, peso}) => {
    if(peso < peso_minore.peso){
        peso_minore = {nome, peso};
    }
})

//stampa in console
console.log('La bici più leggera è ' + `${peso_minore.nome}` + 'che pesa ' + `${peso_minore.peso}` + ' kg');