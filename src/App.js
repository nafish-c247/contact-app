import React from 'react';
import './App.css';
import ContactHeader from './components/ContactHeader.js';
import AddContact from './components/AddContact.js';
import ContactList from './components/ContactList.js';


function App() {

  const contacts = [
    {
      id: "1",
      name: "Nafish",
      email: "nafish@gmail.com"
    },
    {
      id: "2",
      name: "Test",
      email: "test@gmail.com"
    }
  ];
  return (
    <div className="ui container">
      <ContactHeader />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
