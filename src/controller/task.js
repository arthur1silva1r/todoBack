const {
  addTask,
  editTask,
  deleteTask,
  listTasks,
} = require('../service/task');

const addTask = async (name, desc) => {
  await addTask(name, desc);
}

const editTask = async (id, name, desc) => {
  await editTask(id, name, desc);
}

const deleteTask = async (id) => {
  await deleteTask(id);
}

const listTasks = async () => {
  return await listTasks();
}

module.exports =  {
  addTask,
  editTask,
  deleteTask,
  listTasks,
}
