import React, { useState } from 'react';
import axios from 'axios';

const AddUserForm = (props) => {
    const [user, setUser] = useState(
        {
            name: '',
            id: '',
            email: ''
        });

    const handleSubmit = (e) => {
        e.preventdefault();

    
        axios
            .post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                props.addNewUser( user );
                console.log(res);
                console.log(res.data);

            });

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input type="text" name="name" onChange={e=>setUser({...user, name: e.target.value})} />
                </label>
                <label>Id:
                    <input type="text" name="Id" onChange={e=>setUser({...user, id: e.target.value})} />
                </label>
                <label>Email:
                    <input type="email" name="email" onChange={e=>setUser({...user, email: e.target.value})} />
                </label>
                <button>submit</button>
            </form>
        </div>
    )
}

export default AddUserForm;