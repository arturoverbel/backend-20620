import fetch from 'node-fetch';

const response = fetch('https://api.github.com/users/github');

response.then((a) => {
    let rr = a.json()

    rr.then((data) => console.log(data))
    console.log("Done")
})

console.log(response);