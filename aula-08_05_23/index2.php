<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Banco de Dados</title>
</head>

<body>
    <h1>Inserir Dados</h1>

    <form method="post" action="">
        <label>Nome:</label>
        <input type="text" name="campo1">
        <label>Sobrenome:</label>
        <input type="text" name="campo2">

        <input type="submit" name="campo3">
    </form>
    
    
    <br>    <br>    <br>
    
    <a href="https://mutant-technology.000webhostapp.com/index2.php">Registros</a>
</body>
<?php
    //Conectar com o bando de dados
    $conn = mysqli_connect("localhost","id20736498_admin","Admin23@","id20736498_database");

    //Verificar se o formulario foi enviado pelo metodo POST
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $campo1 = $_POST['campo1'];
        $campo2 = $_POST['campo2'];

        //Cria os valores SQL para inserir um registro na tabela
        $sql = "INSERT INTO nomes (nome, sobrenome) VALUES ('$campo1', '$campo2')";

        //Verifica se o formulario foi enviado com sucesso
        if (mysqli_query($conn, $sql)) {
            echo "Registro inserido com sucesso";
        } else {
            echo "Registro não efetivado";
        }
    }
?>

</html>