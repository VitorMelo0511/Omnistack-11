/*Importando módulo Express para a variavel express*/
const express = require('express');
const cors = require('cors');

const routes = require('./routes');

/*variavel app que vai armazenar a aplicação*/
const app = express();

/** Rota / Recursos */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deleter uma informação no backend
 */

 /*Tipos de parametros

 Query Params: parametros nomeados enviados na rota após "?" (Filtros, paginação)
 Route Params: parametros utilizados para identificar recursos
 Request Body: Corpo da requisição, utilziado para criar ou alterar recursos
 */
app.use(cors());
 app.use(express.json());
app.use(routes);


/* Direcionando o app para a porta 3333*/
app.listen(3333)
