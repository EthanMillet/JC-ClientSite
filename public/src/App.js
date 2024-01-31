import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Routes, Route, Navigate } from "react-router-dom";
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
import reportWebVitals from './reportWebVitals';

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
    <Route path="*" element={<Navigate to="/" />}></Route>
  </Routes>
  <Footer/>
 </ApolloProvider>
    )
    };

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default App;