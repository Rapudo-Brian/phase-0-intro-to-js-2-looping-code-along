// Code your solutions in this file
for (let age = 30; age< 40; age++){
    console.log(`I'M ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];
function wrappedGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!` );
    }
    return gifts;
}
wrappedGifts(gifts);


function writeCards(names, event) {
    let messages = []; 
    
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    
    return messages; 
}


const namesArray = ["Brian", "Bob", "Bravine"];
const eventName = "birthday";

const thankYouMessages = writeCards(namesArray, eventName);
console.log(thankYouMessages);


function countDown(number) {
    while (number >= 0) { 
        console.log(number);
        number--; 
    }
}

countDown(8);
