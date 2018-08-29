(function () {
    /*
    Crie um loop que execute enquanto essa constiável for verdadeira. Dentro do
    loop, mostre no console a mensagem:
    'Entrou ao menos uma vez!'
    Qual loop você deve usar para que essa mensagem seja mostrada no console?
    */
    // while

    const person = {
        name: 'Felipe Mathais',
        age: 26,
        weight: 76,
        birthday: '09/03/1992'
    }

    let count = 0
    for (const prop in person) {
        console.log(`The ${prop} of person is ${person[prop]}`)
        count++
    }
    console.log(`The person has ${count} properties`)

    function moreThan (age) {
        return (age > person.age)
        console.log(`The person has more than 25 years old?`, (age > 25))
    }

    let numbers = []
    for(let i = 0; i <= 20; i++) {
        numbers.push(i)
    }
    console.log( 'De 0 a 10:', numbers );

    numbers = []
    for (let i = 0; i <= 20; i++) {
        if (i % 2 !== 1) {
            numbers.push(i)
        }
    }
    console.log( 'Pares de 0 a 20:', numbers);
}())
