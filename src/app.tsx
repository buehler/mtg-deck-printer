import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/header';
import { SelectDeck } from './pages/select-deck';
import { DeckOverview } from './pages/deck-overview';

export const App = hot(() => (
  <Router>
    <Header />
    <main className="mx-12 my-16">
      <Switch>
        <Route path="/overview/:url+">
          <DeckOverview />
        </Route>
        <Route path="*">
          <SelectDeck />
        </Route>
      </Switch>
    </main>
  </Router>
));
