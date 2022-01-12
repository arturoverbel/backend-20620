var admin = require("firebase-admin");

var serviceAccount = require("./coderhouse-project-bb464-firebase-adminsdk-dnztd-b076d0864e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

console.log("Base firebase connected !!")

CRUD()

async function CRUD() {

    const db = admin.firestore();
    const query = db.collection("users")

    try {

        // CREATE 
        let doc = query.doc()
        await doc.create({name: "Mauro", lastname: "Pandolfo", age: 43 })

        doc = query.doc()
        await doc.create({name: "Facundo", lastname: "Villagra", age: 36 })

        doc = query.doc()
        await doc.create({name: "Alejandra", lastname: "Covid", age: 22 })

        console.log("Data inserted!")

        // READ ALL
        const querySnapshot = await query.get()
        let docs = querySnapshot.docs;

        const response = docs.map((docFromQuery) => ({
            name: docFromQuery.data().name,
            lastname: docFromQuery.data().lastname,
            age: docFromQuery.data().age
        }))
        console.log(response)

        // READ ID
        let id = "fOkEADo3fIsULIDYtjFL"
        //const docReadById = query.doc(where("state", "==", "CA"))
        const snapshot = await query.where('name', '==', "Mauro").get(); 
        if (snapshot.empty) { 
            console.log('No matching documents.'); 
        } else {
            snapshot.forEach(doc => { 
                console.log(doc.id, '=>', doc.data()); 
            }); 
        }

        const item = await docReadById.get()
        console.log("-------------")
        console.log(item)

        const responseRead = item.data();
        console.log(responseRead)

        // UPDATE

        let idUpdate = "fOkEADo3fIsULIDYtjFL"
        const docUpdateById = query.doc(idUpdate)
        let itemUpdated = await docUpdateById.update({ identificacion: 123445 })

        console.log("user updated ", itemUpdated)

        // DELETE

        let idDelete = "fOkEADo3fIsULIDYtjFL"
        //const docForDelete = query.doc(idDelete)
        //const itemDelete = await docForDelete.delete()

        console.log("user deleted ", itemDelete)

    } catch(e) {
        console.log(e)
    }



}