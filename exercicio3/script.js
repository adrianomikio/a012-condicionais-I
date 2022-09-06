let nacionalidade = prompt("Qual a sua nacionalidade? Primeira letra maiúscula, por favor.")

if(nacionalidade === "Brasileira" || "Argentina" || "Uruguaia" || "Colombiana" || "Chilena")

{
    console.log(`Sua nacionalidade é: ${nacionalidade}.`)
}

else {
    console.log("Nacionalidade não encontrada.")
}