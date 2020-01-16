import React from 'react';
import {Route} from 'react-router-dom'

const Footer = props => {
    return (
        <div>
            <h2>Stopka</h2>
            <Route path="/" exact render={(props) => {
                console.log(props)
                return (
                    <p>Dodatkowe</p>
                )
            }}/>
        </div>
    );
};


export default Footer;