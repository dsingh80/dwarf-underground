import React, {Component} from 'react';
import './Comment.css';

class Comment extends Component{
    render(){
        return(
            <li class="comment">
                <h1>{this.props.name}</h1>
                <p>{this.props.message}</p>
            </li>
        )
    }
}

export default Comment;