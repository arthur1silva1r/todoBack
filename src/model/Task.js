const connection = require('./connection');

const addTask = (name, desc) => {
  connection.execute(`INSERT INTO Tasks (name, desc, status)
  VALUES (${name}, ${desc}, 'à fazer')`)
}

const editTask = (id, name, desc) => {
  connection.execute(`UPDATE Tasks
  SET name = ${name} 
  WHERE id = ${id}
  
  UPDATE Tasks
  SET desc = ${desc} 
  WHERE id = ${id}`)
}

const deleteTask = (id) => {
  connection.execute(`DELETE FROM Tasks
  WHERE id = ${id}`)
}

const listTasks = () => {
  return connection.execute(`SELECT * FROM Tasks`)
}

module.exports = {
  addTask,
  editTask,
  deleteTask,
  listTasks,
}