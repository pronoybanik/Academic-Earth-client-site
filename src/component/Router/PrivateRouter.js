import React, { useContext } from 'react';
import { Navigate,  useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRouter = ({children}) => {
    const { user, loader} = useContext(AuthContext);
    console.log(user, loader);
    const location = useLocation();

    if(loader){
        return <div>Loading ...</div>
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    } 
    return children
};

export default PrivateRouter;