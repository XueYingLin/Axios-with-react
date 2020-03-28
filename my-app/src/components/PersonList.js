import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons: [],
    };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
         .then(res => {
             console.log("here is the data", res);
             this.setState({ persons: res.data });
         });
    }

    render() {
        return (
            <ul>
                {this.state.persons.map(person => 
                 <p>{person.name} {person.id}</p> 
                )}
            </ul>
        )
    }
}
