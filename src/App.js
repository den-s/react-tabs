import React, { Component } from 'react';
import './App.css';
// import dummyTable from './dummyTable.js'
// import dummyChart from './dummyChart'
// import dummyList from './dummyList'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  componentWillMount = () => {
    this.data = require('./data.json');
  }

  _renderMenus = () => {
    return this.data
      .sort((a, b) => a.order > b.order)
      .map((item, key) => (
        <li key={key}><Link to={item.id}>{item.title}</Link></li>)
      )
  }

  _renderContent = ({ match }) => {
    const func = require(`./tabs/${match.params.id}`);
    return func.default();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul className="tabs">
              {this._renderMenus()}
            </ul>

            <br />

            <Route
              path='/:id'
              component={this._renderContent}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
