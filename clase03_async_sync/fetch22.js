import fetch from 'node-fetch';

const response = await fetch('https://api.github.com/users/github');

console.log("Hola hola")

console.log(response);