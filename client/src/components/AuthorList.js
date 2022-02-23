
import axios from "axios";
import React, {useEffect, useState} from 'react';
import { Link, navigate } from "@reach/router";



const AuthorList = (props) => {
    const {authors, setAuthors, removeFromDom} = props;

    useEffect(()=> {
        axios
        .get("http://localhost:8000/api")
        .then((res)=>{
          console.log(res)
          setAuthors(res.data.allAuthors)
        })
        .catch(err => console.log(err))
      },[])


      const handleDelete = (authorId) => {
          axios
          .delete("http://localhost:8000/api/authors/"+authorId)
          .then(res => {
            removeFromDom(authorId)
          })
          .catch((err)=>console.log(err))
      } 

    return(
        <div>
            <Link to="/new">Add an author</Link>
            <p>We have quotes by:</p>
            <table className="table table-striped table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author)=> {
                        return(
                            <tr key={author._id}>
                                <th scope="row">{author.name}</th>
                                <td>
                                    <button onClick={(e)=> navigate(`/edit/${author._id}`)}>Edit</button>
                                    <button onClick ={(e)=>{handleDelete(author._id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    }) }
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList;