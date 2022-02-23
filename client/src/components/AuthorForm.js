import { Link, navigate } from '@reach/router';
import React, {useState} from 'react';
import CancelButton from './CancelButton';


const AuthorForm = (props) => {
    const{initialName, onSubmitProp, errors, setErrors} = props;
    const [name, setName]= useState(initialName);
    // console.log(initialName)
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({name});
        
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
                    <input type="text"  value={name} onChange={(e)=> setName(e.target.value)} />
                </div>
                {errors.name && <p>{errors.name.message}</p>}
                <CancelButton/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AuthorForm;