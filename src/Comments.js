import React, {Component} from 'react';
import Comment from './Comment.js';

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
            message: form.message.value,
        }

        const comments = [... this.state.comments];
        comments.push(newComment);
        this.setState({comments})
    }

    writeComment(comment, index){
        return <Comment message={comment.message} name={comment.name} key={index} />
    }
    render(){
        return(
            <div style={{display: this.props.displayComments}}>
                <form id="addCommentForm" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="What's yer name?" name="name" required autofocus></input>
                    <input type="text" placeholder="Add comment message here. Please be respectful" name="message" required></input>
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