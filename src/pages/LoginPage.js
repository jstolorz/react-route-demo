import React from 'react';

const LoginPage = props => {
    return (
        <div>
            <label htmlFor="login">Login:
                <input id="login" type="text"/>
            </label>
            <label htmlFor="password">Password:
                <input id="password" type="password"/>
            </label>
            <button>login</button>
        </div>
    );
};


export default LoginPage;