
process.on('uncaughtException', (err) => {
    console.log("ERROR:", err)
})

setTimeout(() => {
    console.log("Runninng...")
}, 500)

funcNoExist()

console.log("Exiting")