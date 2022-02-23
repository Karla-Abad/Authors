import { Link } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";
import AuthorForm from "./AuthorForm";

const UpdateAuthor = (props) => {
    const {id} = props;
    const[author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(()=> {
        axios
        .get("http://localhost:8000/api/edit/"+id)
        .then(res => {
            console.log(res.data);
            setAuthor(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(err))
    },[]);

    const updateAuthor = (author) => {
        axios
        .put("http://localhost:8000/api/edit/"+id, author)
        .then((res)=> {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
          })
    }

    return(
        <div>
            <Link to={"/"}>Home</Link>
            <p>Edit this author</p>
            {loaded && (
                <div>
                    <AuthorForm
                    onSubmitProp = {updateAuthor}
                    initialName={author.name}
                    errors ={errors}
                    />
                </div>
            )}
        </div>
    )
}

export default UpdateAuthor;