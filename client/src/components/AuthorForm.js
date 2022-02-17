import { Link } from '@reach/router';
import React, {useState} from 'react';

const AuthorForm = (props) => {
    const{initialName, onSubmitProp} = props;
    const [name, setName]= useState(initialName);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({name});
        setName("");
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <Link to={"/"}>Home</Link>
                <p>Add a new author:</p>
                <div>
                    <label>Name:</label>
                </div>
                <div>
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
                </div>
                <button>Cancel</button>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AuthorForm;