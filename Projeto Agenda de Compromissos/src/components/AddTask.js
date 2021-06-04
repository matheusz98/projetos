import React from 'react';
import { useState } from 'react';

function AddTask({ onAdd }) {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text || !day) {
            alert('Favor preencher os campos')
            return
        }

        onAdd({ text, day, reminder })

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Compromisso</label>
                <input type="text" placeholder="Adicionar compromisso" value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <div className="form-control">
                <label>Dia & Hora</label>
                <input type="text" placeholder="Adicionar Dia & Hora" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>

            <div className="form-control form-control-check">
                <label>Adicionar lembrete?</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" value="Salvar compromisso" className="btn-form btn-form-block" />
        </form>
    );
}

export default AddTask;