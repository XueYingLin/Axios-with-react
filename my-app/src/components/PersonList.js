import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonList = () => {
   const [personList, setPersonList] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
         .then(res => {
             console.log("here is the data", res);
            setPersonList(res.data);
         })
    }, []);

        return (
            <ul>
                {personList.map(person => 
                 <p>{person.name} {person.id}</p> 
                )}
            </ul>
        )
   
}

export default PersonList;
