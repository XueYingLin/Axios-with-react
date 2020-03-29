import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddUserFormClassFormat from './AddUserFormClassFormat';

const UserList = () => {
   const [personList, setPersonList] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
         .then(res => {
            console.log("here is the data", res);
            setPersonList(res.data);
         })
    }, []);

    //addPerson function to help the lower level to add new person 
    const addNewUser = (person ) => {
        setPersonList([...personList, person]) 
    }

        return (
            <div>
                <ul>
                    <p>Name  ID  Email</p>
                    {personList.map(person => 
                    <p>{person.name} {person.id} {person.email}</p> 
                    )}
                </ul>
                <AddUserFormClassFormat addNewUser={addNewUser} />
            </div>
        )
   
}

export default UserList;
