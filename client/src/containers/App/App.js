import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Home from '../../components/Home/Home';
import Crud from '../Crud/Crud';
import About from '../../components/About/About';

const muiTheme = getMuiTheme({
  ...darkBaseTheme,
  
  appBar: {
    height: 50,
  }
});

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <AppBar
              title="Our App"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <div className="main-container">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/crud" component={Crud} />
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
