import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
    const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Compromisso 1',
          day: 'Data aleatória',
          reminder: true,
      },

      {
          id: 2,
          text: 'Compromisso 2',
          day: 'Data aleatória',
          reminder: true,
      },

      {
          id: 3,
          text: 'Compromisso 3',
          day: 'Data aleatória',
          reminder: false,
      }
  ]);

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
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
          ) : (
            'Nenhum compromisso marcado.'
          )}
        </div>
      </div>
  );
}

export default App;
