import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui teal image header">
            <div className="content">
              wefiwefoijwfe
            </div>
          </h2>
          <div className="App">
            <div className="ui large form">
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"/>
                    <input type="text" name="email" placeholder="E-mail address"/>
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"/>
                    <input type="password" name="password" placeholder="Password"/>
                  </div>
                </div>
                <div className="ui fluid large teal submit button">Login</div>
              </div>
              <div className="ui error message"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
