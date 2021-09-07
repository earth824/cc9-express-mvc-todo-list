const path = require('path');
const Todo = require('../models/todoModel');

exports.getIndex = async (req, res, next) => {
  // res.sendFile(path.join(__dirname, '../views/index.html'));
  const todos = await Todo.findAll();
  res.render('index', { user: 'John Doe', todos });
};

exports.getCreatePage = (req, res) => {
  res.render('create-todo');
};

exports.createTodo = async (req, res) => {
  const body = req.body;
  await Todo.create({ list: body.list, status: false });
  res.redirect('/');
};
