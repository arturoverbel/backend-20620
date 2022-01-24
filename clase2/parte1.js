let variable1 = 32;
console.log(variable1);

let variable2 = null;
let variable3 = undefined;

if (variable2) {
    console.log("Paso el null");
} else {
    console.log("No pasa el null");
}

if (variable3) console.log("Paso el undefined");
else console.log("No pasa el undefined");

let sett2 = !!variable2
let sett3 = !!variable3

console.log("Sett 2: " + sett2)
console.log("Sett 3: " + sett3)


// SCOPE


if(3 == 2 + 1) {

    const primera = 34;
    console.log("Uno: ", primera);

    if(false == false) {
        console.log("Dos: ", primera);
    }

}

//console.log(primera);





