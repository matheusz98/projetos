import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
    const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task }
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  };

    return (
      <div className="container">
        <div className="content">
          <Header />
          <AddTask onAdd={addTask} />
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
          ) : (
            <p className="warning">Nenhum compromisso marcado</p>
          )}
        </div>
      </div>
  );
}

export default App;
