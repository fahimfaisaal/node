const shortId = require('shortid');

const todos = [];

exports.removeTodo = (req, res) => {
    const { todoId } = req.params;

    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    const deleteTodo = todos.splice(todoIndex, 1)[0];

    return res.status(205).json({ message: "this todo has been deleted!", ...deleteTodo });
}

exports.patchTodo = (req, res) => {
    const { todoId } = req.params;
    const todo = todos.find(todo => todo.id === todoId);
    const { text, isCompleted } = req.body;

    todo.text = text || todo.text;
    todo.isCompleted = isCompleted || todo.isCompleted;

    return res.status(200).json({ message: "todo has updated", ...todo });
}

exports.putTodo = (req, res) => {
    // if exists the data then it will be update
    // if not exist it will be create

    const { todoId } = req.params;
    const todo = todos.find(todo => todo.id === todoId);

    if (todo) {
        const { text, isCompleted } = req.body;

        todo.text = text || todo.text;
        todo.isCompleted = isCompleted || todo.isCompleted;

        return res.status(200).json({ message: "todo has updated", ...todo });
    } else {
        const todo = {
            text,
            id: shortId(),
            isCompleted: false,
            created: new Date().toLocaleDateString()
        }

        todos.push(todo);
        return res.status(201).json({ message: `todo has created, id - ${todo.id}`, ...todo });
    }
}

exports.findTodoById = (req, res) => {
    const { todoId } = req.params;
    const findTodo = todos.find(todo => todo.id === todoId);

    return res.status(200).json(findTodo);
}

exports.findTodos = (req, res) => {
    const showTodos = todos.map(todo => ({ text: todo.text, id: todo.id }));

    return res.status(200).json(showTodos);
}

exports.createTodo = (req, res) => {
    const { text } = req.body;

    const todo = {
        text,
        id: shortId(),
        isCompleted: false,
        created: new Date().toLocaleDateString()
    }

    todos.push(todo);
    return res.status(201).json({ message: `todo has created, id - ${todo.id}`, ...todo })
}