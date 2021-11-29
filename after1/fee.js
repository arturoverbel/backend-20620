import fetch from 'node-fetch';

const response = await fetch('https://api.github.com/users/github');

const data = await response.json();

console.log("Hola hola")

console.log(data.avatar_url);

console.log("FIN!")