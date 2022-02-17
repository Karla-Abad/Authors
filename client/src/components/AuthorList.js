
import axios from "axios";
import React, {useEffect, useState} from 'react';
import { Link } from "@reach/router";


const AuthorList = () => {
    return(
        <div>
            <Link to="/new">Add an author</Link>
        </div>
    )
}

export default AuthorList;