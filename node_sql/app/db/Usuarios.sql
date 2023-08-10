--CRIANDO DATABASE
CREATE DATABASE Cadastro
USE Cadastro


--CRIANDO TABLE Usuarios
CREATE TABLE Usuarios (
	id_user INT IDENTITY(1,1) PRIMARY KEY,
	nome_user VARCHAR(200),
	sobrenome_user VARCHAR(200),
)


--ATRIBUINDO OSS VALORES A TABLE Usuarios
INSERT INTO Usuarios(nome_user, sobrenome_user)
VALUES
	('João', 'Silva'),
    ('Maria', 'Santos'),
    ('Carlos', 'Ferreira'),
    ('Ana', 'Oliveira'),
    ('Pedro', 'Rodrigues'),
    ('Lúcia', 'Almeida'),
    ('Rafael', 'Martins'),
    ('Laura', 'Gomes'),
    ('Bruno', 'Costa'),
    ('Mariana', 'Pereira')


SELECT * FROM Usuarios