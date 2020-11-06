import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import CountryDetail from './containers/CountryDetail'
import CountryList from './containers/CountryList'

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/">
          <Redirect to="/country" />
        </Route>
        <Route exact path="/country" component={CountryList} />
        <Route exact path="/country/:code" component={CountryDetail} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
