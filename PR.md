# Recurso EngWeb2024

## SETUP

Desenvolvi um script em `Python` para corrigir o dataset `dataset.json` que continha alguns erros em releção à estrutura fornecida. Começei por ler o ficheiro e a seguir corrigi os paramêtros: `genres`, `characters`, `ratingsByStars`, `setting` e `awards` em que neles passei para uma lista de `strings` para estar de acordo com o nosso modelo. Após isso também apliquei um regex no próprio dataset em que alterei o `bookId` para `_id`.

Sendo que depois o dataset foi importado para o mongo com o comando:
```
mongoimport -d livros -c livros --type json --file dataset_corrigido.json --jsonArray
```

### QUERIES
Foi desenvolvido as queries pretendidas no ficheiro `queries.txt`.

### API

Para a criação da API utilizou-se os seguintes comandos:
- `npx express-generator --no-view ex1`
- `npm i`
- `npm i mongoose`

Sendo que depois todas os metodos foram definidos como pretendido:
- Para além das metodos pedidos foi desenvolvido o metodo `GET /books?author=BBB` em que o campo `BBB` é o nome do autor, e foi desenvolvido este método para ser utilizado no exercicio 2.


### APP

Para a criação da APP utilizou-se os seguintes comandos:
- `npx express-generator --view=pug ex2`
- `npm i`
- `npm install axios`

Em que depois todas as rotas foram definidas como pedido no enunciado.

### DOCKER

Para correr o docker-compose basta então executar os seguintes comandos:

```
docker compose build
```

```
docker compose up -d
```

Para parar basta execuatr o comando:
```
docker compose down
```