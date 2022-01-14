import admin from "firebase-admin"
import fs from 'fs'

const serviceAccount = JSON.parse(fs.readFileSync("./db/carbon-nucleus-264418-firebase-adminsdk-fe63c-52c4c25c90.json", 'utf8'))

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://carbon-nucleus-264418.firebaseio.com"
});

console.log('Base Firebase conectada!')

const db = admin.firestore();
const colores = db.collection('colores')

// /* --------------------------------------- */
// 1) Agregar los colores red, green, blue dentro de una colección llamada colores con el formato: { nombre: color }
await colores.doc().set({ nombre: 'red' });
await colores.doc().set({ nombre: 'green' });
await colores.doc().set({ nombre: 'blue' });
console.log('Colores insertados')

// /* --------------------------------------- */
// 2) Listar todos los colores disponibles.
const snapshot = await colores.get();
snapshot.forEach(doc => {
    console.log({ id: doc.id, ...doc.data() })
})

// /* --------------------------------------- */
// 3) Modificar el color blue por navy.
const item = await colores.doc('0PzosCqVLujpzR9THSdn').update({ color: 'navy' });
console.log("El color ha sido actualizado", item);


/* --------------------------------------- */
const item = await colores.doc('Qqp11dkTF24dsSJomokO').delete();
console.log("El color ha sido borrado exitosamente", item);
