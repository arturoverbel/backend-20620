var admin = require("firebase-admin");

var serviceAccount = require("./coderhouse-project-bb464-firebase-adminsdk-dnztd-b076d0864e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

console.log("Base firebase connected !!")

const db = admin.firestore();
const query = db.collection("colors")

const colors = ['red', 'blue', 'yellow', 'pink', 'green', 'white']

EXEC()

async function colorExist(color) {
    try{
        const snapshot = await query.where('name', '==', color).get(); 

        return !snapshot.empty
    } catch(e) {
        console.log(e)
        return true
    }
}

async function listarColores() {
    try{
        const snapshot = await query.get();

        return snapshot.docs.map(d => ({ name: d.data().name}) )
    } catch(e) {
        console.log(e)
        return []
    }
}

async function updateColor(color, newColor) {
    try{
        const snapshot = await query.where('name', '==', color).get();
        const doc = snapshot.docs[0]
        console.log(doc)
        let itemUpdated = await doc.update({ name: newColor })

        return itemUpdated.length > 0
    } catch(e) {
        console.log(e)
        return false
    }
}

async function EXEC() {

    try {
        // CREATE COLORS
        colors.forEach(async (color) => {
            if(!(await colorExist(color))) {
                await query.doc().create({name: color})
                console.log(`Color ${color} has been inserted`)
            }
        })

        // LISTAR
        const lista = await listarColores();
        console.log(lista)

        // UPDATE
        // TODO 
        //const resultUpdate = await updateColor("blue", "navy")
        //console.log(resultUpdate)

    } catch(e) {
        console.log(e)
    }
}

