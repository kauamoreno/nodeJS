const sql = require('msnodesqlv8');

//Conectar com a db
const conection = 'server=.;Database=Cadastro;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}';

const update = "UPDATE Usuarios SET nome_user = 'Kauã' where id_user=1"

//Informar o resultado
sql.query(conection, update, (error, resultado) => {

    error ? console.log(error) : console.log('Valores atualizado com sucesso', resultado)

})