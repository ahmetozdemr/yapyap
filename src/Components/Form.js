import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    constructor(props){
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    static propTypes = {
        addContact: PropTypes.func
    };

   state = {
     bookName: '',
     author: ''
   };

   onChange(e){
     this.setState({
       [e.target.name]: e.target.value
     });
   }

   onSubmit(e){
       e.preventDefault();
       this.props.addContact({
           ...this.state
       });
       this.setState({
           bookName: '',
           author: '',
           publisher: ''
       })
   }

    render() {
        return (
            <div>

                <form className={"form"} onSubmit={this.onSubmit}>
                    <input
                        name="bookName"
                        id="bookName"
                        value={this.state.bookName}
                        onChange={this.onChange}
                        placeholder="Enter a book name"/>
                    <br/>
                    <input
                        name="author"
                        id="author"
                        value={this.state.author}
                        onChange={this.onChange}
                        placeholder="Enter a autor"/>
                    <input
                        name="publisher"
                        id="publisher"
                        value={this.state.publisher}
                        onChange={this.onChange}
                        placeholder="Enter a publisher"/>

                    <button>Add</button>

                </form>
            </div>
        );
    }
}

export default Form;
