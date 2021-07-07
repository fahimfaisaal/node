const router = require('express').Router();
const controller = require('./controller')

router.delete('/:todoId', controller.removeTodo);

router.patch('/:todoId', controller.patchTodo);

router.put('/:todoId', controller.putTodo);

router.get('/:todoId', controller.findTodoById);

router.get('/', controller.findTodos);

router.post('/', controller.createTodo);

module.exports = router;