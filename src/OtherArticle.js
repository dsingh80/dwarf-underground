import React, {Component} from 'react';
import './OtherArticle.css';

class OtherArticle extends Component{
    render(){
        return(
            <div className="small-6 medium-3 columns other-article">
              <a href="#">
                <img src={this.props.img} alt={this.props.alt} />
                <p>{this.props.message}</p>
              </a>  
            </div>
        )
    }
}

export default OtherArticle;