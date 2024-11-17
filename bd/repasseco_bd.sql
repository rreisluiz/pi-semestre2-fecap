create database repasseco;
use repasseco;

create table usuario(
CPF char(11) not null,
nome_usuario varchar(100) not null,
email_usuario varchar(100) not null,
senha_usuario varchar(100) not null,
data_nascimento_usuario date not null,
CEP char(15) not null,
logradouro varchar(200) not null,
EnderecoNumero varchar(10) not null,
bairro varchar(150) not null,
uf char(2) not null,
cidade varchar(50) not null,
telefone varchar(20) not null,
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