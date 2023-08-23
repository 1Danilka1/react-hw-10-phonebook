import './App.css';
import React, { useState } from 'react'
import ContactsList from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export default function App() {
  const [filter, setFilter] = useState('');


        return (
          <div className='container'>
            <div className='main_container'>
              <h1>Phonebook</h1>
              <ContactForm />
              <h2>Contacts</h2>
              <Filter onFilterChange={setFilter} />
              <ContactsList filterVal={filter}/>
            </div>
          </div>
        )
      }