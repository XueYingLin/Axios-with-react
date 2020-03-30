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
        e.preventDefault();

    
        axios
            .post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                props.addNewUser( user );
                console.log(res);
                console.log(res.data);
                setUser ({
                    name: '',
                    id: '',
                    email: ''
                })

            });

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input type="text" name="name" value={user.name} onChange={e=>setUser({...user, name: e.target.value})} />
                </label>
                <label>Id:
                    <input type="text" name="Id" value={user.id} onChange={e=>setUser({...user, id: e.target.value})} />
                </label>
                <label>Email:
                    <input type="email" name="email" value={user.email} onChange={e=>setUser({...user, email: e.target.value})} />
                </label>
                <button>submit</button>
            </form>
        </div>
    )
}

export default AddUserForm;