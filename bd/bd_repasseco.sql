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

create table imagens(
	id_foto int auto_increment,
    foto varchar(5000),
    id_item int,
    constraint PKid primary key(id_foto),
	constraint FKid_item foreign key(id_item) references item(id_item)
);

create table interesse(
id_interesse int auto_increment,
data_interesse date not null,
CPF char(11) not null,
id_item int,
constraint PKinteresse primary key(id_interesse),
constraint FKcpf_interesse foreign key(CPF) references usuario(CPF),
constraint FKitem_interesse foreign key(id_item) references item(id_item)
);

create table possuir(
id_possuir int auto_increment,
data_possuir date not null,
id_interesse int,
id_item int,
constraint PKpossuir primary key(id_possuir),
constraint FKinteresse foreign key(id_interesse) references interesse(id_interesse),
constraint FKitem foreign key(id_item) references item(id_item)
);