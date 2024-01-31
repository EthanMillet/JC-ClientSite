import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './index.css';
import Main from './components/pages/main';
import Contact from './components/pages/contact'
import About from './components/pages/about'
import Nav from './components/nav'
import Footer from './components/footer';

const httpLink = createHttpLink({
  uri: process.env.herokuLink || 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
    return (
 <ApolloProvider client={client}>
 <Nav/>
  <Routes>
    <Route path='/' element={<Main/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/about' element={<About/>}></Route>

  </Routes>
  <Footer/>
 </ApolloProvider>
    )
    };

export default App;