process.stdout.write("Holaa holaa\n")

console.log = function(d) {
    process.stdout.write("LOG: " + d + '\n')
}

console.log("Proceso corriendo...")