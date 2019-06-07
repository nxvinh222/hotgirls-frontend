import React, { Component } from 'react';

class girlPictures extends Component {
    render() {
        const comments = this.props.img.comment ?
         this.props.img.comment.map(
            comment => 
                <p>
                    <span className="font-weight-bold">
                        {comment.createdBy.username}
                    </span>:{" "}{comment.content}
                </p>
        ) : "";
        
        // console.log(comments)
        return (
            <div>
                <img
                    className="img-fluid"
                    src={this.props.img.image}
                    alt={this.props.img.title} />
                <h4>
                    {this.props.img.title}
                </h4>
                {comments}
            </div>
        );
    }
}

export default girlPictures;