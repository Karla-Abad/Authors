import './App.css';
import React from 'react';
import {Router} from "@reach/router"
import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';
import UpdateAuthor from './components/UpdateAuthor';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';



const App= () => {
  const [authors, setAuthors] = useState([]);
  const[loaded, setLoaded] = useState(false);

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

  const createAuthor = author => {
    axios
    .post("http://localhost:8000/api/new", author)
    .then(res => {
      setAuthors([...authors, res.data])
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <AuthorList path="/" default/>
        <AuthorForm path="/new" initialName="" onSubmitProp={createAuthor} />
        <UpdateAuthor path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
