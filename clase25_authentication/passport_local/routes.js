const res = require("express/lib/response")

function getRoot(req, res) {
    res.send("Hola index")
}

function getLogin(req, res) {
    if(req.isAuthenticated()) {
        var user = req.user
        console.log("Usuario logeado")

        res.send('login-ok')
    } else {
        res.sendFile(__dirname + '/views/login.html')
    }
}

function postLogin(req, res) {
    var user = req.user

    res.sendFile(__dirname + '/views/index.html')
}


function getFailSignup(req, res) {
    res.send("Fail to signup")
}

function getSignup(req, res) {
    res.sendFile(__dirname + "/views/signup.html")
}

function postSignup(req, res) {
    var user = req.user

    res.sendFile(__dirname + '/views/index.html')
}

module.exports = {
    getRoot,
    getLogin,
    postLogin,
    getSignup,
    postSignup,
    getFailSignup
}