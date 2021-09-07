const express = require('express');

const todoController = require('./controllers/todoController');

const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.get('/', todoController.getIndex);
app.get('/create-todo', todoController.getCreatePage);
app.post('/create-todo', todoController.createTodo);

app.listen(8111, () => console.log('server running on port 8111'));
