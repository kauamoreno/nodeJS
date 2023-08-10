const sql = require('msnodesqlv8');

//Conectar com a db
const conection = 'server=.;Database=Cadastro;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}';

const consulta = 'SELECT * FROM Usuarios';

//Informar o resultado
sql.query(conection, consulta, (error, resultado) => {

    error ? console.log(error) : console.log('Valores da tabela', resultado)

})