<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conexão do DB - PHP</title>
</head>
<body>

    <h1>Hello World</h1>

    <?php

        // Definindo as informações de conexão ao banco de dados
        $servidor = "localhost";
        $usuario = "root";
        $senha = "";
        $dbNome = "Banco_de_Dados";

        // Criando a conexão com o DB
        $conn = mysqli_connect($servidor, $usuario, $senha, $dbNome);

        // Desinir a consulta SQL para selecionar os registros da tabela
        $tabela = "SELECT * FROM nomes";

        // Executar a consulta SQL e armazenar o resultado em uma variavel
        $resultado_tabela = mysqli_query($conn, $tabela);

        while($row_usuario = mysqli_fetch_assoc($resultado_tabela)) {
            
            // Imprimindo os dados
            echo "<hr>"
            echo "ID - " . $row_usuario['id'] . "<br>";
            echo "Nome - " . $row_usuario['nome'] . "<br>";
            echo "Sobrenome - " . $row_usuario['sobrenome'] . "<br>";
        }
    ?>
</body>
</html>