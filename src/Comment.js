import React, {Component} from 'react';
import './Comment.css';

class Comment extends Component{
    showFullComment(ev){
        const message = ev.currentTarget.parentNode.querySelector('.message');
        message.classList.toggle('hidden');
    }

    render(){
        return(
            <li className="comment">
                <h3 className="username">{this.props.name}</h3>
                <p className="date">{new Date().toLocaleDateString()}</p>
                <p className="message hidden">{this.props.message}</p>
                <button onClick={this.showFullComment.bind(this)}>Show Comment</button>
            </li>
        )
    }
}

export default Comment;