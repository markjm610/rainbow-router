import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Indigo from './Indigo';



const Blue = () => (
    <div>
        <h2 className="blue">Blue only</h2>
        <NavLink to='/blue/indigo'>Add indigo</NavLink>

        <Route path='/blue/indigo' component={Indigo}></Route>
    </div>
);

export default Blue;