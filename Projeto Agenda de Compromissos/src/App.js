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
    return (
      <div className="container">
        <div className="content">
          <Header />
          <Tasks tasks={tasks} />
        </div>
      </div>
  );
}

export default App;
