import React from "react";
import {Link, Outlet} from 'react-router-dom';

function Navigate(){
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li> 
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/ContactUs">Contact us</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

export default Navigate;