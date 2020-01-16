import React, {Component} from 'react';
import '../styles/ContactPage.css'
import {Prompt} from 'react-router-dom'

class ContactPage extends Component {
    
    state = {
        value: ''
    }

    handleOnSubmitForm = e => {
        e.preventDefault()
        this.setState({
            value: ''
        })
    }

    handleOnChangeArea = e => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleOnSubmitForm}>
                    <h3>Napisz do nas</h3>
                    <textarea value={this.state.value} onChange={this.handleOnChangeArea}/>
                    <button>Wyślij</button>
                </form>
                <Prompt
                  when={this.state.value}
                  message='Masz nie wypełniony formulasz'
                />
            </div>
        );
    }
}

export default ContactPage;