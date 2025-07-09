const promisel = Promise.resolve(3)
const promise2 = new Promise((resolve , reject) => setTimeout(resolve,1000,"foo"));
const promise3 = new Promise((resolve , reject) => setTimeout(resolve,3000,"bar"));

Promise.all([promisel,promise2,promise3])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.error(error);
    });