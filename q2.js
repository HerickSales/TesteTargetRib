//insira a palavra String aqui
let word= 'aA'

console.log(searchA(word))



function searchA(word){
    let reps= Array.from(word.toLowerCase()).filter((l)=> l=='a').length
    return reps>0?`foram encontradas ${reps} letras 'a'`: `nao foi encontrada nenhuma letra 'a'`
}