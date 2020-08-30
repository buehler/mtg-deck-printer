import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/header';
import { DeckOverview } from './pages/deck-overview';
import { SelectDeck } from './pages/select-deck';

const base = document.getElementsByTagName('base').item(0);
let baseHref = '/';
if (base) {
  const url = new URL(base.href);
  baseHref = url.pathname;
}

export const App = hot(() => (
  <Router basename={baseHref}>
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
