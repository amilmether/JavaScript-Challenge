const prompt = require("prompt-sync")()

function printInfo(){
    console.log("Contant Management System")
    console.log("--------------------------")
    console.log("1. Add a Contact")
    console.log("2. Delete a Contact")
    console.log("3. View Contacts")
    console.log("4. Search Contacts")
    console.log("5. Exit")
}

function addContact(){
    const name = prompt("Name: ")
    const email = prompt("email: ")
    const phnumber = parseFloat(prompt("Phone No: "))
    const contact = {
        name:name,
        email:email,
        phnumber:phnumber
    }
    contacts.push(contact)
}

function deleteContact(){
    for (let i=0 ; i <contacts.length; i++){
        const contact = contacts[i]
        console.log((i+1).toString() + ":", contact.name )
    }
    const number = parseInt(prompt("Enter an ID: "))
    if (isNaN(number) || number >contacts.lenght){
        console.log("Invalid.")
        return
    }
    contacts.splice(number - 1,1)
    console.log("Contact Removed")
}

function searchContact(){
    const searchString = prompt("Search: ").toLowerCase()
    const Result = []

    for (let contact of contacts){
        if (contact.name.toLowerCase().includes(searchString)) Result.push(contact)
    }
    listContact(Result)
}
function listContact(Contacts){
    for (let contact of Contacts){
        console.log("###############")
        console.log("Name:",contact.name)
        console.log("Email:",contact.email)
        console.log("Phone No:",contact.phnumber)
    }
}
const contacts = []
let keepGoing = true;
printInfo()

while(keepGoing){
const number = parseFloat(prompt("Enter an Opeation (1-5): "))
switch (number) {
    case 1:
        addContact()
        break;
    case 2:
        deleteContact()
        break;
    case 3:
        listContact(contacts) // pass contacts
        break;
    case 4:
        searchContact()
        break;
    case 5:
        console.log("exiting..")
        keepGoing = false
        break;

    default:
        console.log("not found")
        break;
}}