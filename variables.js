// var x = "hello"
// x = "world"


// let x = 5
// x = 7 
// x+=1


// const pi = 3.14

function tests(){
    console.log(x)
    let x = "test"// it cause an error so we use var so we get it when the top of the function
    console.log(x)

}

tests()


// 🔑 Key difference
// var	let / const
// Hoisted + initialized as undefined	Hoisted but NOT initialized
// Function-scoped	Block-scoped
// Access before line: returns undefined	Access before line: ReferenceError (TDZ)