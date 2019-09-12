import React, { Component} from 'react';
import { BrowserRouter } from 'react-router-dom';

//components 
import MainRouter from './MainRouter';


class App extends Component{
  render() {

    return (
      <BrowserRouter className="container">
          <MainRouter />
      </BrowserRouter>
    );
  }
}

export default App;
