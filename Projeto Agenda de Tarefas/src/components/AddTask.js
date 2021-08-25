import React, { useState, useEffect, useRef } from "react";

const AddTask = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Atualizar tarefa"
            value={input}
            name="text"
            className="task-input edit"
            onChange={handleChange}
            ref={inputFocus}
          />
          <button className="submit-task edit">Criar tarefa</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Adicionar tarefa"
            value={input}
            name="text"
            className="task-input"
            onChange={handleChange}
            ref={inputFocus}
          />
          <button className="submit-task">Criar tarefa</button>
        </>
      )}
    </form>
  );
};

export default AddTask;
