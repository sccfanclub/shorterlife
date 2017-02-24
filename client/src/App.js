import React, {Component} from 'react';
import './App.css';
import {Field, reduxForm} from 'redux-form';

class App extends Component {
  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui teal image header">
            <div className="content">
              短连接后台
            </div>
          </h2>
          <div className="App">
            <div className="ui large form">
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"/>
                    <Field type="text" component="input" name="username" placeholder="用户名"/>
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"/>
                    <Field type="password" component="input" name="password" placeholder="密码"/>
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

export default reduxForm({form: 'login'})(App);
