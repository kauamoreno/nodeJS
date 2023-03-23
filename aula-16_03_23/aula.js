// npm install json-server
// Criar aula.json
// npx json-server aula-16_03_2023/aula.json  - Cria um servidor local
// Para finalizar - ctrl+c

fetch("http://localhost:3000/nomes")
    .then(response => {
        return response.json()
    }).then(nomes => {
        console.log(nomes);
    })

// document.getElementById('pessoa1').innerHTML = `Nome: ${nomes[0].nome} <br> ID: ${nomes[0].id}`
// document.getElementById('pessoa2').innerHTML = `Nome: ${nomes[1].nome} <br> ID: ${nomes[1].id}`

document.getElementById('dados').innerHTML = `Nome: ${nomes[0].id}`
