const sql = require('msnodesqlv8');

//Conectar com a db
const conection = 'server=.;Database=Cadastro;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}';

const deleteQuery = "DELETE FROM Usuarios WHERE id_user = 10"

//Informar o resultado
sql.query(conection, deleteQuery, (error, resultado) => {

    error ? console.log(error) : console.log('Valores atualizado com sucesso', resultado)

})