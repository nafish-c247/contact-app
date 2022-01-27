import React, {useState} from 'react';
import './App.css';
import ContactHeader from './components/ContactHeader.js';
import AddContact from './components/AddContact.js';
import ContactList from './components/ContactList.js';


function App() {

  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  return (
    <div className="ui container">
      <ContactHeader />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
