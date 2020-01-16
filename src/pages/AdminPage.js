import React from 'react';
import {Route, Redirect} from 'react-router-dom'

const permission = false

const AdminPage = props => {
    return (
        <div>
           <Route render={() => (
               permission ? (<h3>Panel Admina</h3>) : (
                   <Redirect to="/login"/>
               )
           )}/>
        </div>
    );
};


export default AdminPage;