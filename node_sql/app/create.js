const sql = require('msnodesqlv8');

//Conectar com a db
const conection = 'server=.;Database=Cadastro;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}';

const create = "INSERT INTO Usuarios(nome_user, sobrenome_user) VALUES ('Teste1', 'Silva'),('Create', 'Santos')"

//Informar o resultado
sql.query(conection, create, (error, resultado) => {

    error ? console.log(error) : console.log('Valores inseridos com sucesso', resultado)

})