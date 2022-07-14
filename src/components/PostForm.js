import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        const url = `https://jsonplaceholder.typicode.com/posts`;
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        const res = await fetch(url, settings);
        const data = await res.json();
        console.log(data);
    }

    render() {
        const { userId, title, body } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="userId">User ID </label>
                    <input type="text" id="userId" value={userId} name="userId" onChange={this.handleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="title">Title </label>
                    <input type="text" id="title" value={title} name="title" onChange={this.handleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="body">Body </label>
                    <input type="text" id="body" value={body} name="body" onChange={this.handleChange} />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default PostForm
