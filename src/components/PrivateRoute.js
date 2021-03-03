import React from 'react';
import { Route, useHistory, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, ...rest }) => {
    const token = useSelector(state => state.user.token);
    const history = useHistory();

    // if(!token || token === "") {
    //     history.push('/login');
    //     return null;
    // }

    return (
        <Route
           {...rest}
           render={() =>
            !token || token === "" ?  <Redirect to='/login'/> : children
           }
        />  
        
    )
}

export default PrivateRoute;
