import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import configureStore from './redux/setupStore';
import CreateUserDeckComponent from './components/CreateUserDeckComponent';
import CreateBattlePageComponent from './components/CreateBattlePageComponent';
import IndexPage from './components/IndexPage';

import CreateBattleDeckContainer from './redux/containers/CreateBattleDeckContainer';
import IndexPageContainer from './redux/containers/IndexPageContainer';
import CreateUserDeckContainer from './redux/containers/CreateUserDeckContainer';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={IndexPageContainer} />
            <Route
              exact
              path="/decks/new"
              component={CreateUserDeckContainer}
            />
            <Route
              exact
              path="/decks/battle"
              component={CreateBattleDeckContainer}
            />
            {/* <Route
              exact
              path="/decks/battle"
              render={props => <CreateBattlePageComponent {...props} />}
            /> */}
            <Route
              exact
              path="/decks/:deckId"
              render={props => <IndexPage {...props} />}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
