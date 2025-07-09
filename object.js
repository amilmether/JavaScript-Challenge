const obj = {
    name: "Amil",
    age:20,
    sayHello: function(){
        return "hello"
    },
    carreer: {}
}

console.log(Object.values(obj))


for (let key in obj){
    console.log(key)
}

const obj2 = {
    hairColor:"black",
    arr : [1,2,3],
    name: "sabin"// it will print
}

const obj3 = {...obj,...obj2}

console.log(obj3)