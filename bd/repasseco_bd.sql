create database repasseco;
use repasseco;

create table usuario(
CPF char(11) not null,
nome_usuario varchar(100) not null,
email_usuario varchar(100) not null,
senha_usuario varchar(100) not null,
data_nascimento_usuario date not null,
logradouro varchar(200),
complemento varchar(50),
bairro varchar(150),
uf char(2),
cidade varchar(50),
estado varchar(50),
telefone varchar(20),
constraint PKcpf primary key(CPF)
);

create table item(
id_item int auto_increment,
foto_item varchar(250) not null,
descricao_item varchar(5000) not null,
nome_item varchar (200) not null,
categoria_item varchar (100) not null,
estado_uso_item varchar(100) not null,
CPF char(11) not null,
constraint PKitem primary key(id_item),
constraint FKcpf foreign key(CPF) references usuario(CPF)
);