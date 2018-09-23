import React, { Component } from 'react';
import '../App.css';

import  Contacts from './Contacts';
import Form from './Form';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {


    constructor(props){
        super(props);
        this.addContact = this.addContact.bind(this);
    }
    state = {
        contacts: []
    };

    componentDidMount() {
        fetch('http://5b8e76c85722ac001431758c.mockapi.io/api/v1/KitapAdi')
            .then(data => data.json())
            .then(contacts => {
                this.setState({
                    contacts,
                })
            })
    }

    addContact(contact){
        const { contacts } = this.state;
        contacts.push(contact);

        this.setState({
            contacts
        })
    }

  render() {
    return (
        <Router>
            <div>
              <Route path="/" exact render={
                  () => {
                      return( <div className="App">
                          <Link className={"create"} to={'/create'}>Create</Link>
                          <Contacts

                              contacts={this.state.contacts}/>
                      </div>)
                  }
              }/>
                <Route path="/create" exact render={
                    () => {

                        return(
                                <div>
                            <Form addContact = {this.addContact}/>
                                    <Link className={"homepage"} to={'/'}>Homepage</Link>
                        </div>)
                    }
                }/>
            </div>
        </Router>

    );
  }
}

export default App;
