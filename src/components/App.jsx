import React, { Component } from "react";
//import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Div } from './Common/App.styled';



//const KEY_CONTACTS = 'contacts';

export class App extends Component {
  
 

  

  // handleFilter(value) {
   
  //   const { filter, contacts } = this.state;
  //   if(filter){
  //     return contacts.filter(({name}) => {
  //       return name.toLowerCase().includes(value.toLowerCase());
  //     })
  //   } 
  //     return contacts;
    
  // }
  
  // componentDidMount(){
  //   const contactsLS = localStorage.getItem(KEY_CONTACTS);
  //   if(contactsLS !== null){
  //     const contacts = JSON.parse(contactsLS);
  //     this.setState({contacts});
  //   }
  // }
  
  // componentDidUpdate(_, prevState) {
  //   const {contacts} = this.state;
  //   if(prevState.contacts !== contacts){
  //     localStorage.setItem(KEY_CONTACTS, JSON.stringify(contacts));
  //   }
  // }

  render() {
    
    return (
      <Div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter/>
      
        <Contacts/>
      
      </Div>
      
    )
  }
};


     