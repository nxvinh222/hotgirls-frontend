import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import axios from './axios';

import HomeScreen from './containers/HomeScreen';
import DetailScreen from './containers/DetailScreen';

import { BrowserRouter, Route } from 'react-router-dom';


const Link = (props) => <a href={props.children} target="_blank"> {props.children}</a>


class App extends Component {
  state = {

  }

  _onLogin = () => {
    console.log("ok");
    axios
      .post("/api/auth/login", {
        username: "vinh11",
        password: "213456"
      })
      .then(response => {
        this.setState({
          username: response.data.user.username,
          id: response.data.user._id
        })
        // console.log(this.state.username)
      }
        // console.log("ok")
      )
      .catch(err => console.error(err))
  }

  render() {
    // console.log(this.state._onLogin)
    // console.log(this.state.username)
    return (
      // <div style={{backgroundColor: "#FF0000"}}></div>
      <BrowserRouter>
        <div className="App">

          <Route exact path="/" render={(props) => {
            return <HomeScreen {...props} username={this.state.username} _onLogin={this._onLogin} />
          }} />
          <Route exact path="/posts/:id" render={(props) => {
            return <DetailScreen {...props} username={this.state.username} _onLogin={this._onLogin} />
          }} />
          {/* <DetailScreen/>    */}
          {/* <HomeScreen username={this.state.username} _onLogin={this._onLogin} /> */}

        </div>
      </BrowserRouter>
    );
  }
}

export default App;