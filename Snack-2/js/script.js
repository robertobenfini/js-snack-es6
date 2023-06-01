//array studenti
let studenti = [
    { 'id': '213',
        'nome': 'Marco della Rovere',
        'grado': '78',
    },
    { 'id': '110',
        'nome': 'Paola Cortellesa',
        'grado': '96',
    },
    { 'id': '250',
        'nome': 'Andrea Mantegna',
        'grado': '48',
    },
    { 'id': '145',
        'nome': 'Gaia Borromini',
        'grado': '74',
    },
    { 'id': '196',
        'nome': 'Luigi Grimaldello',
        'grado': '68',
    },
    { 'id': '102',
        'nome': 'Piero della Francesca',
        'grado': '50',
    },
    { 'id': '120',
        'nome': 'Francesca della Polenta',
        'grado': '84',
    },
];

//nome studenti in maiuscolo
let nome_up = studenti.map((elem) => {

    let new_nome = elem.nome.toUpperCase() 
    return new_nome
})
console.log(nome_up)

//filtro l'array con il grado superiore al 70
let voti_70 = studenti.filter((item) => { if(item.grado > 70)return true})
console.log(voti_70)

//filtro l'array con il grado superiore al 70 e id superiore a 120
let id_120 = studenti.filter((item) => { if(item.grado > 70 && item.id > 120)return true})
console.log(id_120)