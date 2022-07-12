import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comment: '',
            language: 'reactnative'
        }
    }

    handleUserChange = e => {
        this.setState({
            username: e.target.value
        })
    }

    handleCommentChange = e => {
        this.setState({
            comment: e.target.value
        })
    }

    handleLangChange = e => {
        this.setState({
            language: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username </label>
                    <input type="text" id="username" value={this.state.username} onChange={this.handleUserChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comment </label>
                    <textarea id="comment" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor="language">Language </label>
                    <select id="language" value={this.state.language} onChange={this.handleLangChange}>
                        <option value="react">React</option>
                        <option value="reactnative">React Native</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default DemoForm
