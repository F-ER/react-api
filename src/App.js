import logo from "./logo.svg";
import React, { Component } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

export default class App extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const date = await response.json();
    this.setState({ person: date.results[0], loading: false });
    //this.setState({ person: null, loading: false });
  }
  render() {
    if (this.state.loading) {
      return (
        <center>
          <div className="sweet-loading">
            <br></br>
            <br></br>
            <ClipLoader
              size={150}
              color={"grey"}
              loading={this.state.loading}
            />
          </div>
        </center>
      );
    }
    if (!this.state.person) {
      return (
        <div>
          <center>Didn't get a person </center>{" "}
        </div>
      );
    }
    return (
      <div>
        <br></br>
        <br></br>
        <center>
          <div>
            <div> {this.state.person.name.title} </div>
            <div> {this.state.person.name.first} </div>
            <div> {this.state.person.name.last} </div>
            <img
              src={this.state.person.picture.large}
              height="150"
              width="150"
            />
          </div>
        </center>
      </div>
    );
  }
}
