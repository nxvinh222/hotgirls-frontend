import React, { Component } from 'react';
import GirlPictures from '../components/GirlPictures';
import NavBar from '../components/NavBar';
import axios from '../axios';

class DetailScreen extends Component {
    state = {

    };

    componentDidMount() {
        axios
            .get(`api/post/${this.props.match.params.id}`)
            .then(data => {
                // console.log(data.data)
                this.setState({ post: data.data.data }, () => {
                    console.log(this.state.post);
                })

            })
            .catch(err => console.log(err))

    }
    render() {
        return (
            <div>
                <NavBar
                    _onSearchChange={this._onSearchChange}
                    username={this.props.username}
                    _onLogin={this.props._onLogin} />
                <div className="main_content container">
                    <div className="row">
                        <div className='col-6 ml-auto mr-auto'>
                            {this.state.post ? <GirlPictures img={this.state.post} /> : ''}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailScreen;