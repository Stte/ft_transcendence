import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import GameArea from './components/GameArea';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" exact>
            <GameArea />
            <NavBar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
