import React, { useContext, useEffect } from 'react';
import { Appcontext } from '../Usecontext/Parentcontext';
import { Navigate } from 'react-router-dom';

function Logout() {
    const { LogoutUser } = useContext(Appcontext); // Consuming the context here

    useEffect(() => {
        LogoutUser(); // Call the LogoutUser function from the context
    }, [LogoutUser]);

    return <Navigate to={'/'} />;
}

export default Logout;
