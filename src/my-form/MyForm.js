import { useState } from "react";
import './MyForm.css';

function MyForm() {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Nombre ingresado: ${name}`)
    };

    return (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-2">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </div>
        </form>
        <hr />
        <p>Name: {name}</p>
      </div>
    );
}

export default MyForm;