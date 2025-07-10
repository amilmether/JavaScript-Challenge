const prompt = require("prompt-sync")()
const name = prompt("What is Your name ? ")
console.log(`Hello ${name} Welcome to out game!`) //console.log("Hello" + name + "How are You ?")

const shouldWePlay = prompt ('DO you want to play? ')

const condition = shouldWePlay.toLowerCase() == 'yes'

if (condition){
    const leftOrRight = prompt("you enter a maze , do you want to go left or right? ")
    if (leftOrRight ==="left"){
        console.log("You go left and see a bridge...")
        const cross = prompt("Do you want to cross the bridge? ").toLowerCase()
        if (cross === "yes"){
            console.log("You cross but the bridge was weak and broke and you fell. You lost.")
        } else {
            console.log("Good Choice ... You Win")
        }
    }else if (leftOrRight === "right"){
        console.log("You go right and fall off a cliff...") 
    }
} else if (!condition){
    prompt("Okay :(")
}