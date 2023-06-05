//array squadre
let squadre = [
    {
        nome: 'juventus',
        punti_fatti: 0,
        falli_subiti: 0
    },

    {
        nome: 'milan',
        punti_fatti: 0,
        falli_subiti: 0
    },

    {
        nome: 'inter',
        punti_fatti: 0,
        falli_subiti: 0
    },

    {
        nome: 'roma',
        punti_fatti: 0,
        falli_subiti: 0
    },

    {
        nome: 'lazio',
        punti_fatti: 0,
        falli_subiti: 0
    }
];

//funzione per generare 
function num_random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(num_random)

//ciclo per assegnare il numero random alle proprietà 
squadre.forEach(squadra => {
    squadra.punti_fatti = num_random(1, 90)
    squadra.falli_subiti = num_random(1, 90)
})
console.log(squadre)

//creo un nuovo array con i nuovi valori
let new_squad = squadre.map(({nome, falli_subiti}) => ({nome, falli_subiti}));
console.log(new_squad)