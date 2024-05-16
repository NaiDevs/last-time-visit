const db = await Deno.openKv()
/*
const user = 'naidevs'
const result = await db.set(["username"], user)
console.log(result)

const username = await db.get(["username"])
console.log(username) */

//ejemplo contador

//const counter = await db.get(["counter"])
/*
const { value } = await db.get<number>(["counter"])
console.log(value)
const newCounter = value == null ? 0 : value+1

const result = await db.set(["counter"], newCounter)

console.log(result) */


//visitas

//await db.set(["visits"], new Deno.KvU64(0n)) // 0n -> bigInt

/*
await db.atomic().sum(["visits"], 1n).commit()

const result = await db.get<Deno.KvU64>(["visits"])

console.log(result) */

//Ejemplo con Objetos
/*

const facundoPreferences = {
    username: "facundoCapua",
    theme: "light",
    language: "en-UK",
}

const miduPreferences = {
    username: "midudev",
    theme: "dark",
    language: "es-ES",
}

const naidevsPreferences = {
    username: "naidevs",
    theme: "dark",
    language: "es-MX",
}

await db.set(["preferences", "facundo"], facundoPreferences)
await db.set(["preferences", "midudev"], miduPreferences)
await db.set(["preferences", "naidevs"], naidevsPreferences)
const miduPreferences = await db.get(["preferences", "midudev"])
const facundoPreferences = await db.get(["preferences", "facundo"])
const naidevsPreferences = await db.get(["preferences", "naidevs"])

console.log(miduPreferences)
console.log(facundoPreferences)
console.log(naidevsPreferences) 
*/

//Otra manera de ver en vez de hacer get individual
/*
const [
    facundoPreferences,
    miduPreferences,
] = await db.getMany([
    ["preferences", "facundo"],
    ["preferences", "midudev"]
])

console.log(miduPreferences)
console.log(facundoPreferences) */

// con entradas

const entries = db.list({ prefix: ["preferences"]})

for await (const entry of entries) {
    console.log(entry)
}

db.delete(["preferences", "facundo"]) // Eliminar
