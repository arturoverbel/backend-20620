const fin = () => console.log("Terminé")

function mostarLetras(string, time, endFunction) {
    
    setTimeout(() => {
        if (string.length > 0) {
            console.log(string[0])
            string = string.slice(1)
            mostarLetras(string, time, endFunction)
        } else {
            endFunction()
        }
    }, time)
}

mostarLetras("¡Hola!", 50, fin)
mostarLetras("¡Hola!", 250, fin)
mostarLetras("¡Hola!", 500, fin)

