const express = require('express')
const {
  addTask,
  editTask,
  deleteTask,
  listTasks,
} = require('./controller/task')
const app = express()
const port = 3000

app.get('/tasks', async(_req, res) => {
  try {
    const lista = await listTasks();
    return res.status(200).json(lista)
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message })
  }
})

app.post('/tasks', async (req, res) => {
  const { name, desc} = req.body;
  try {
    await addTask()
    return res.status(200).json({ message: 'TASK WAS ADDED' })
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message })
  }
})

app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await deleteTask(id)
    return res.status(200).json({ message: 'TASK WAS DELETED' })
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message })
  }
})

app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { name, desc } = req.body;
  try {
    await editTask(name, desc)
    return res.status(200).json({ message: 'TASK WAS EDITED' })
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message })
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))