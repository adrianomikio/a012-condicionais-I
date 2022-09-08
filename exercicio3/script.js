let nacionalidade = ["brasileira" || "argentina" || "uruguaia" || "chilena" || "colombiana"]
let pedirNacionalidade = prompt("Qual é a sua nacionalidade?").toLowerCase()

console.log(pedirNacionalidade.includes(nacionalidade))


if (pedirNacionalidade.includes(nacionalidade) === true)

{
    console.log(`Sua nacionalidade é: ${pedirNacionalidade}.`)
}

else {
    console.log(`Nacionalidade ${pedirNacionalidade} não encontrada.`)
}