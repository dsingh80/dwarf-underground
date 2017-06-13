import React, {Component} from 'react';
import OtherArticle from './OtherArticle';

class RelatedArticles extends Component{
    addArticle(article){
        console.log(this);
        return (
            <OtherArticle message={article.message} img={article.img} alt={article.alt} />
        )
    }

    render(){
        
        return(
            <div className="small-12 columns other-articles">
                <h2>{this.props.name}</h2>
                {this.props.articles.map(this.addArticle.bind(this))}
            </div>
        )
    }
}

export default RelatedArticles;