//variabile array invitati
let array_invitati = [
     'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'
    ];

//array invitati con gli attributi
let segnaposto = array_invitati.map((item, index) => {
    let oggetti = {
    'tavolo': 'Tavolo VIP',
    'name': item,
    'value': index + 1
};
    return oggetti
});

//ciclo for per stampare i singoli attributi
for(let i = 0; i<segnaposto.length; i++){
    let result=segnaposto[i]
    console.log(result.tavolo)
    console.log(result.name)
    console.log(result.value)
};