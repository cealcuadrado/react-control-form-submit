import { useState } from "react";
import './MyForm.css';

function MyForm() {
    const [name, setName] = useState('');

    return (
        <div className="form">
            <form>
                <label>Name</label>
                <input type="text" class="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
            </form>
            <hr />
            <p>Name: {name}</p>
        </div>
    );
}

export default MyForm;