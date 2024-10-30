# Justificativa
Banco de Dados: MySQL
Justificativa de Escolha
Optamos por MySQL devido ao seu bom desempenho, fácil integração com Node.js e JavaScript, além de ser uma solução gratuita e amplamente utilizada no mercado.

Ferramentas Utilizadas
MySQL Workbench: Para design, modelagem e administração do banco de dados.

# MiniMundo
Mini-Mundo
O RepassEco nasceu para ser mais do que um site de doações: ele é um espaço que conecta solidariedade e consumo consciente. Com o slogan “eco de esperança, repasse de mudança”, a plataforma facilita o encontro entre quem deseja doar itens que não usa mais e quem está precisando deles. Sem envolvimento financeiro e com uma navegação simples, a proposta é gerar um impacto positivo e sustentável.
No RepassEco, qualquer pessoa pode cadastrar produtos para doação, detalhando o estado de conservação e anexando fotos. Por outro lado, quem busca um item pode navegar pelas ofertas e entrar em contato diretamente para combinar a entrega. A plataforma também conta com uma ferramenta de localização para pontos de descarte correto de resíduos, como eletrônicos e produtos químicos, incentivando o descarte consciente e adequado.
Nosso objetivo é criar um ambiente transformador, onde pequenas atitudes resultam em grandes mudanças. Com cada doação e descarte correto, queremos dar eco à esperança e construir um futuro mais sustentável e solidário, em linha com os Objetivos de Desenvolvimento Sustentável (ODS) 12 e 15 da ONU, que promovem consumo responsável e preservação da vida terrestre.

# MER

MER:
Usuário
Atributos: CPF, Nome, E-mail, Telefone, Endereço, Data_nascimento, Senha
Item
Atributos: ID_item, Nome_item, Descrição, Estado_uso, Foto, Categoria, ID_usuario (FK)
Doação
Atributos: ID_doacao, Data_doacao, ID_item (FK), ID_usuario_doador (FK), ID_usuario_receptor (FK)
Interesse
Atributos: ID_interesse, ID_item (FK), ID_usuario (FK), Data_interesse

# Banco de Dados - RepassEco

**Descrição das Tabelas Implementadas**

**Tabela usuario**
Descrição: Contém informações dos usuários cadastrados no nosso site RepassEco.
Estrutura:
CPF (char(11)): Identificador único do usuário, é chave primária.
nome_usuario (varchar(100)): Nome completo do usuário.
email_usuario (varchar(100)): Endereço de e-mail do usuário.
senha_usuario (varchar(100)): Senha do usuário.
data_nascimento_usuario (date): Data de nascimento do usuário.
logradouro (varchar(200)): Endereço do usuário (opcional).
complemento (varchar(50)): Complemento do endereço (opcional).
bairro (varchar(150)): Bairro do endereço do usuário (opcional).
uf (char(2)): Unidade federativa (opcional).
cidade (varchar(50)): Cidade do usuário (opcional).
estado (varchar(50)): Estado do endereço (opcional).
telefone (varchar(20)): Número de telefone do usuário (opcional).

**Tabela item**
Descrição: Armazena informações sobre os itens disponíveis para doação ou repasse.
Estrutura:
id_item (int): Identificador único do item, chave primária, com incremento automático.
foto_item (varchar(250)): URL da imagem do item.
descricao_item (varchar(5000)): Descrição detalhada do item.
nome_item (varchar(200)): Nome do item.
categoria_item (varchar(100)): Categoria do item (ex.: eletrônico, móvel, etc.).
estado_uso_item (varchar(100)): Condição de uso do item.
CPF (char(11)): Chave estrangeira referenciando o CPF do doador na tabela usuario.
