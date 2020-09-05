import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Profile from "./ProfilePic.jpg";
import Resume from "./resume.pdf"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={Profile} className="App-profile" alt="profilepic" />
          <h1>Martin Martinez</h1>
        </div>
        <p className="App-intro">
        Born in Buenos Aires, Argentina. I have lived in Utah for 20 years. I have been working in sales for 15 years now. Looking for a career change at 37 sounds crazy but I am really excited!
        </p>
        <div className="resume">
                    <a href={Resume} rel="nofollow noreferrer" target="_blank" className="resume">
                        <h4>Resume</h4>
                    </a>
                </div>
                <form>
          <div className="form-group">
              <label htmlFor="name">Phone Number: (801) 879-4638</label>
          </div>
          <div className="form-group">
              <label htmlFor="email">Email: </label> <a href="mailto:martinlmartinez1983@gmail.com"> martinlmartinez1983@gmail.com</a>
          </div>
          <div className="form-group">
              <label htmlFor="message">Github: </label>
              <a href="https://github.com/MartinMartinez83" className="card-link" target="_blank" rel="noopener noreferrer"> MartinMartinez83</a>
          </div>
          <div className="form-group">
              <label htmlFor="linkedin">Linkedin: </label>
              <a href="https://www.linkedin.com/in/martinluismartinez1983" className="card-link" target="_blank" rel="noopener noreferrer"> Martin Martinez</a>
          </div>
      </form>
      </div>
    );
  }
}

export default App;
