import React from 'react';
import axios from 'axios';

//use the axios .post to add new person to the personList
export default class AddUserFormClassFormat extends React.Component {
    state = {
        name: '',
        id: '',
        email: ''
    }

    handleChangeName = event => {
        this.setState({ name: event.target.value });
    }
    handleChangeId = event => {
        this.setState({ id: event.target.value });
    }
    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name,
            id: this.state.id,
            email: this.state.email
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                this.props.addNewUser( user );
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type="text" name="name" onChange={this.handleChangeName} />
                    </label>
                    <label>
                        Id:
                        <input type="text" name="id" onChange={this.handleChangeId} />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" onChange={this.handleChangeEmail} />
                    </label>
                    <button type="submit">Add</button>
                </form>

            </div>
        )
    }
}