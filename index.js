// beforeReach(function() {
//     cats.length = 0;
//     cats.push("Milo","Otis", "Garfield")
// })
const cats = ["Milo","Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
    return cats
}
function  destructivelyPrependCat(name){
    cats.unshift(name)
    return cats
}
function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}

function  appendCat(name){
    const allCats= [...cats, name]
    return allCats
}
function prependCat(name){
   const buddyCats = [name, ...cats]
    return buddyCats
}
function removeLastCat(){
    return cats.slice(0,-1)
}
function removeFirstCat(){
    return cats.slice(1)
}