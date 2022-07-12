import React from 'react'
import './PostItem.css'
import styled from 'styled-components'

const h1Style = {
    backgroundColor: 'yellow',
    padding: '5px'
}

const Para = styled.p`
    font-size: 1em;
    text-align: center;
    color: darkblue;
`;

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const PostItem = ({ post }) => {
    return (
        <div className='container'>
            <h1 style={h1Style}>ID: {post.id}</h1>
            <h3 style={{ backgroundColor: 'pink', padding: '5px', color: 'darkmagenta' }}>Title: {post.title}</h3>
            <Para>{post.body}</Para>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </div>
    )
}

export default PostItem