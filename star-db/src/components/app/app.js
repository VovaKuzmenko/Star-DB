import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import { SwapiServiceProvider } from '../swapi-service-context';

import SwapiService from "../../services/swapi-service";

import './app.css';



export default class App extends Component {

  state = {
    swapiService: new SwapiService()   
  };

  render() {
    
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />

              <Route path="/"
                     render={() => <h2>Welcome to StarDB</h2>}
                     exact />
              <Route path="/people"
                     render={() => <h2></h2>}
                     exact />
              <Route path="/people/" component={PeoplePage} />
              <Route path="/planets/" component={PlanetsPage} />
              <Route path="/starships/" exact component={StarshipsPage} />
              

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

