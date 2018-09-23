import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './List.css';

class List extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
    };
    state = {
        filterText: ''
    };

    onChangeFilterText = (e) => {
      this.setState({
          filterText: e.target.value
      })
    };

    render() {
        const filteredContacts = this.props.contacts.filter(
            contact => {
                return (contact.bookName.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
                ) !== -1) || (contact.author.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
                ) !== -1) || (contact.publisher.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
            ) !== -1)
            }
        );
        return (
            <div className={"listArea"}>
                <input
                    value={this.state.filterText}
                    onChange={this.onChangeFilterText}
                    name= {"filter"}
                       id = { "filter"}
                       placeholder = {"Filter by book name , author or publisher"}/>

                <ul className={"list"}>
                    {
                        filteredContacts.map(contact =>
                             <li key={contact.id}>
                                <span className={"bookname"}>Book Name: {contact.bookName}</span>
                                <span className={"author"}>Author: {contact.author}</span>
                                <span className={"Publisher"}>Publisher: {contact.publisher}</span>
                                <span className={"clearfix"}></span>

                            </li>

                        )
                    }

                </ul>
            </div>
        );
    }
}

export default List;
