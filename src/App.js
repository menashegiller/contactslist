import React, { useState, useEffect } from 'react';
import ContactList from './components/contactList';
import ContactDetails from './components/contactDetails';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import StateContext from './context.js';

function App() {
  const [contacts, setContacts] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    async function getData() {
      if (counter < 10) {
        const res = await fetch("https://randomuser.me/api");

        res
          .json()
          .then(res => {
            setContacts(oldcontacts => [...oldcontacts, res.results[0]]);
            setCounter(oldCounter => oldCounter + 1);
          })
      }
    }
    getData();

  }, [counter]);



  return (
    <StateContext.Provider value={{ counter: counter, contacts: contacts }}>
      <BrowserRouter>
        <div className='header'>ContactsAPP</div>
        <Route exact path='/' component={ContactList}></Route>
        <Route path='/details' component={ContactDetails}></Route>
      </BrowserRouter>

    </StateContext.Provider>
  );
}

export default App;
