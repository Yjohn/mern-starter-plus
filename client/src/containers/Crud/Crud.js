import React, { Component } from 'react';
import axios from 'axios';

class CRUD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            name: ''
        }
    }
    _getUsers = () => {
        axios.get('http://localhost:3000/api/users')
        .then((res => {
            const users = res.data;
            this.setState({
                users: users
            });
        }))
    }
    componentDidMount() {
        this._getUsers();
    }

    _delete = (userId) => {
        axios.delete(`http://localhost:3000/api/users/${userId}`)
            .then(this._getUsers)
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/api/users', {
            name: this.state.name
        })
        .then(()=>{
            this.setState({
                name: ''
            })
        })
        .then(this._getUsers)
    }
    _handleChange = (event) => {
        const value = event.target.value;
        console.log(value);
        this.setState({
            name: value
        })
    }

    render() {
        return (
            <div>
                This is CRUD Demo
                {
                    this.state.users.map((user, index) => {
                        return (
                            <div key={index}>
                                {user.name}
                                <button onClick={() => this._delete(user._id)}>Delete</button>
                            </div>
                        )
                 })}
                <form>
                    <input value={this.state.name} 
                        onChange={this._handleChange} 
                        type="text"
                        name="name" />
                    <button onClick={this._handleSubmit}>
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

export default CRUD;