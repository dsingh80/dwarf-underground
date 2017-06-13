import React, {Component} from 'react';
import Comment from './Comment.js';
import './Comments.css';

class Comments extends Component{
    constructor(){
        super();
        this.state = {
            comments: [],
        }
    }

    handleSubmit(ev){
        const form = ev.currentTarget;

        ev.preventDefault();
        const newComment = {
            name: form.name.value,
            message: form.querySelector('textarea').value,
        }

        const comments = [... this.state.comments];
        comments.push(newComment);
        this.setState({comments})

        form.reset();
    }

    writeComment(comment, index){
        return <Comment message={comment.message} name={comment.name} key={index} />
    }
    render(){
        return(
            <div style={{display: this.props.displayComments}}>
                <form id="addCommentForm" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="What's yer name?" name="name" required autofocus></input>
                    <textarea rows="4" cols="50" maxlength="250" required></textarea>
                    <button type="submit">Say it ta' his face</button>
                </form>

                <ul id="comments">
                    {this.state.comments.map(this.writeComment)}
                </ul>


            </div>
        )
    }
}

export default Comments;