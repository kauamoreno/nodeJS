function fazerLogin(){
    const nome = document.getElementById('nome').value
    const idade = document.getElementById('idade').value

    fetch("http://localhost:3000/pessoas").then(response => response.json())
        .then(data => {

            //Busca as pessoas cujo nome e idade coincidem com os valores digitados
            //o (p) seria o parametro do find (procurar) Função callBack
            const pessoa = data.find(
                p => p.nome === nome && p.idade === idade
            )

            if(pessoa){
                window.location.href = '../delete.html'
            }else{
                alert("nome e idade não encontrados no banco de dados")
            }
        })
}