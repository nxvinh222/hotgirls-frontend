import React, { Component } from 'react';
import MainContent from '../components/MainContent'
import NavBar from '../components/NavBar';
import axios from '../axios';

class HomeScreen extends Component {
    state = {
        posts: [],
        searchString: ""
    };

    componentDidMount() {
        axios
            .get("/api/post/")
            .then(data => {
                // console.log(data.data)
                this.setState({ posts: data.data.data }, () => {
                    console.log(this.state.posts[0].image);
                })

            })
            .catch(err => console.log(err))

    }

    _onSearchChange = text => this.setState({ searchString: text })

    
    render() {
        console.log(this.props._onLogin)
        const displayedImages = this.state.posts.filter(
            post => post.title.includes(this.state.searchString))
        return (
            <div>
                <NavBar
                    _onSearchChange={this._onSearchChange}
                    username={this.props.username}
                    _onLogin={this.props._onLogin} />
                <MainContent posts={displayedImages} />
            </div>
        );
    }
}

export default HomeScreen;