# Teste para desenvolvedor FullStack na Clínica Experts

O desafio é desenvolver um app encurtador de links utilizando como base o [design](https://dribbble.com/shots/10724954-Linktree-Clone)

# Instruções
- Criar um fork deste repositório
- Utilizar como base o [design](https://dribbble.com/shots/10724954-Linktree-Clone)
- Fique à vontade para usar bibliotecas/componentes externos
- Seguir princípios **CLEAN CODE**
- Escrever o código em **INGLÊS**
- Utilize os comentários dos commits para documentar o processo de desenvolvimento
- Documentar como rodar o projeto

# Requisitos
- O projeto deve ser desenvolvido com frontend em **Vue.js** e backend em **Laravel**
- Criar **CRUD** para o cadastro dos links
- Ao clicar em links do encurtador deve ser salvo no banco de dados informações do usuário como IP, User-Agent, etc.
- Salvar as informações necessárias em um banco de dados relacional de preferência **MySql/MariaDB**.

# Opcionais
- Upload de imagem do perfil da página de links

# Como rodar o projeto
O projeto está arquitetado para rodar em um ambiente Docker, então todos os comandos
abaixo devem ser dentro do container de PHP se por `docker run` ou `docker exec -it`
após o ambiente ser levantado através do comando `docker-compose build && docker-compose up -d `
ou conectando direto no container através do `VS Code Dev Container`.

Se for a primeira vez executando o projeto, é necessário rodar os seguintes comandos:
- `composer update`
- `composer install`
- `npm install`

Após isso, é necessário criar o arquivo de variáveis de ambiente:
- `cp .env.example .env`

Nesse projeto, a configuração atual para a conexão com o banco de dados é:

    DB_CONNECTION=mysql
    DB_HOST=mariadb
    DB_PORT=3306
    DB_DATABASE=homestead
    DB_USERNAME=homestead
    DB_PASSWORD=secret
(Se deseja alterar as informações, é preciso alterar também no `docker-compose.yml`)

Após isso, rode:
- `php artisan key:generate`

Assim o projeto está configurado na parte do servidor e pode ser acessado em [`http://localhost:8080`](https://dribbble.com/shots/10724954-Linktree-Clone). 

Para gerar o banco de dados e já preencher com dados de teste, rode:
- `php artisan migrate`
- `php artisan db:seed`

Para conseguir utilizar as imagens salvas no servidor, rode:
- `php artisan storage:link`

Para gerar o frontend do projeto, é necessário rodar:
- `npm run dev`

Já para o frontend atualizar a cada mudança no código, é possível utilizar:
- `nmp run watch`
