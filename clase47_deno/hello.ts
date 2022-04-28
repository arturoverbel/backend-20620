import { parse } from 'https://deno.land/std@0.95.0/datetime/mod.ts'
import { red, bgYellow, bgWhite, bold } from 'https://deno.land/std@0.136.0/fmt/colors.ts'


const sayHello = (name: string): string => {
	return `Hello ${name}`;
}

console.log( sayHello('World') );
console.log(parse("20-01-2019", "dd-MM-yyyy") )

console.log( bgYellow(red('Hello everyone')) )
console.log( bgWhite(bold(red('Hello everyone'))) )

// Variable global Deno
console.log(Deno.args)

// Env
const port = Number(Deno.env.get('PORT') || 8080)
console.log(port)

// Files

await Deno.writeTextFile('text.txt', "So easy!")

const text = await Deno.readTextFile('text.txt')
console.log(text)

