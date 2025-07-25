const myObj = {
    game1: "NFS",
    game2: "Spiderman"
}

for (const key in myObj) {
    // console.log(`${key} :- ${myObj[key]}`);   
}

const programming = ["py", "js", "cpp", "java", "swift"]

for (const key in programming) {
    // console.log(programming[key]);    
}

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")

// prints nothing
for (const key in map) {
    console.log(key);
    
}