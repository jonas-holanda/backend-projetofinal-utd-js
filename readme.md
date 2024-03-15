<div align="center">

# Backend do projeto final do curso de Javascript da Universidade do Trabalho Digital - UTD

</div>

**Ao longo do curso aprendemos sobre Javascript, NodeJs, Express e o ORM Sequelize para podermos criar um CRUD.** 
**Também vimos sobre React, HTML e CSS para o frontend da nossa aplicação, junto com o Axios para fazermos essa ligação com a API do backend.**

**O projeto final proposto pelo professor, foi seguir o passo-a-passo que ele havia nos disponibilizado em dois arquivos em PDF com a estrutura e os códigos para criarmos as aplicações tanto do backend como do frontend.**

**Então nós tinhamos que seguir o passo-a-passo e podendo fazer alterações para melhorar o projeto.**

# Tecnologias Utilizadas

<div align="center">

![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![Nodejs](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) ![Mysql](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white) ![Dbeaver](https://img.shields.io/badge/dbeaver-382923?style=for-the-badge&logo=dbeaver&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white) 

</div>

# Alterações realizadas no sistema
**O projeto inicialmente tinha implementado um delete que deletava realmente os registros.**
**Então implementei o softdelete, para que os registros ainda ficassem na tabela e só atualizasse o campo do softdelete.**

**Também instalei o pacote dotenv para a manipulação das variáveis de ambiente.**
**Através do pacote dotenv consegui acessar mais facilmente as variáveis de ambiente na hora do deploy na Vercel, passando as credenciais do banco de dados mysql(gratuito que eu havia criado para o projeto) de uma forma segura.**


# Rotas da API

### ⚠️ Importante
**Como esse projeto está rodando na web e com um banco de dados de teste, mas funcional. Eu tirei o acesso total do cors de todos os dispositivos, só liberei para o frontend que também está rodando na web, e para o ambiente local, caso você queira testar localmente. Criei também um .env-example com um exemplo das variáveis de ambiente.**

**⚠️⚠️ Para você usar localmente o projeto, na sua aplicação de testes de API, você terá que passar um Header, com a key: `origin` e o value: `http://localhost:8080`, isso em todas as requisições abaixo.**

**Headers ⬇️**
Key | Value
:--:|:---:
`origin` | `http://localhost:8080`

## Listagem de todos os Clientes

- **GET** - `http://localhost:8080/api/clientes`

## Listagem de um Cliente por ID

- **GET** - `http://localhost:8080/api/cliente/{id}`

## Adicionar Cliente

- **POST** - `http://localhost:8080/api/cliente`
- **BODY** -
```json
{
    "nome": "Jonas",
    "idade": 24,
    "email": "jonas@email.com"
}
```
## Alterar Cliente

- **PUT** - `http://localhost:8080/api/cliente`
- **BODY** -
```json
{
    "id" : {id},
    "nome": "Jonas Holanda",
    "idade": 24,
    "email": "jonas@email.com"
}
```

## Excluir Cliente

- **DELETE** - `http://localhost:8080/api/cliente/{id}`


<p align="center">
    <strong>Copyright © <a href="https://github.com/jonas-holanda" target="_blank">Jonas Holanda</a>. All Rights Reserved.</strong>
</p>