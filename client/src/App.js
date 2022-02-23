import './App.css';
import React from 'react';
import {navigate, Router} from "@reach/router"
import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';
import UpdateAuthor from './components/UpdateAuthor';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';



const App= () => {
  const [authors, setAuthors] = useState([]);
  const[loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(()=> {
    axios
    .get("http://localhost:8000/api")
    .then((res)=>{
      console.log(res)
      setAuthors(res.data.allAuthors)
      setLoaded(true);
    })
    .catch(err => console.log(err))
  },[])

  const removeFromDom = authorId => {
    setAuthors(authors.filter(author => author._id !== authorId))
  }

  const createAuthor = author => {
    axios
    .post("http://localhost:8000/api/new", author)
    .then(res => {
      setAuthors([...authors, res.data])
      navigate("/");
    })
    .catch(err => {
      console.log(err.response.data.err.errors);
      setErrors(err.response.data.err.errors);
    })
  }

  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <AuthorList path="/" default authors={authors} setAuthors={setAuthors} removeFromDom={removeFromDom}/>
        <AuthorForm path="/new" initialName={""} onSubmitProp={createAuthor} errors ={errors} setErrors={setErrors}/>
        <UpdateAuthor path="/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
