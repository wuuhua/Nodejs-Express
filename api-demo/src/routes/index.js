const express = require("express")
const router = express.Router()

// get取得 post新增 put更新 delete刪除
// CRUD create read update delete

let todos = [
    {
        id: 1,
        title: "buy milk",
        completed: false
    }
]

router.get("/todos", (req, res) => {
    res.json(todos)
})

// 新增 todo
router.post("/todos", (req, res) => {
    const { title } = req.body

    const newTodo ={
        id: todos.length + 1,
        title,
        completed: false
    }

    todos.push(newTodo)
    res.status(201).json(newTodo)
})

// 更新 todo
router.put("/todos/:id", (req, res) => {
    const { id } = req.params
    const { title, completed } = req.body
    const todo = todos.find((t) => t.id === parseInt(id))

    if(!todo) {
        return res.status(404).json({ error:"找不到這個 id" })
    }

    todo.title = title || todo.title
    todo.completed = completed ?? todo.completed

    res.json(todo)
})

// 刪除 todo
router.delete("/todos/:id", (req, res) => {
    const { id } = req.params
    todos = todos.filter((t) => t.id !== parseInt(id))
    res.status(204).send()
})


module.exports = router