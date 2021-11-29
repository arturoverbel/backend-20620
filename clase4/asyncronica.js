var varInterval;

function async() {
    setTimeout(() => {
        console.log("Termine todo")
        clearInterval(varInterval)
    }, 7000)
}

function interval() {
    varInterval = setInterval(() => {
        console.log("DONE interval ")
    }, 3000)
}



async()
interval()
console.log("Hola hola")

