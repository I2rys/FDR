//Dependencies
const Fs = require("fs")

//Variables
const Self_Args = process.argv.slice(2)

//Main
if(!Self_Args.length){
    console.log("node index.js <input> <output> <regex> <flags>")
    process.exit()
}

if(!Self_Args[1]){
    console.log("Invalid output.")
    process.exit()
}

if(!Self_Args[2]){
    console.log("Invalid regex.")
    process.exit()
}


if(!Self_Args[3]){
    console.log("Invalid flags.")
    process.exit()
}

if(!Fs.existsSync(Self_Args[0])){
    console.log("Unable to find the input.")
    process.exit()
}

const regex = new RegExp(Self_Args[2], Self_Args[3])
const file_data = Fs.readFileSync(Self_Args[0], "utf8")

if(!file_data){
    console.log("File data is empty.")
    process.exit()
}

const matches = file_data.match(regex)

if(!matches){
    console.log("No matched words in the file with the specified regex.")
    process.exit()
}

console.log(`${matches.length} matched words in the file.`)
console.log("Saving the results.")
Fs.writeFileSync(Self_Args[1], matches.join("\n"), "utf8")
console.log(`Results has been saved to ${Self_Args[1]}.`)
