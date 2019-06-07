import React, { Component } from 'react';
import GirlPictures from './GirlPictures'

import { Link } from 'react-router-dom'

class MainContent extends Component {

    render() {
        const allImage = this.props.posts.map(
            img =>
                <div key={img._id} className='col-3'>
                    <Link to={`/posts/${img._id}`}>
                        <GirlPictures img={img} />
                    </Link>
                </div>)
        return (
            <div className="container">
                <div className='row'>
                    {allImage}
                </div>

            </div>
        );
    }
}

export default MainContent;