// Code your solutions in this file

function writeCards(array,event){
    const mesaj = []
    for (let i = 0; i < array.length; i++) {
        mesaj.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return mesaj
}
function countDown(number){
    let i =number;
    while (i>-1) {
        console.log(i)
        i--;
    }
}