
import React from 'react';
import { useEffect } from 'react';
import img from '../../assets/error404.jpg';

const PageNotFound = () => {

    useEffect(()=>{
        document.title = "Jobless | Page Not Found";
    })

    return ( 
        <div className="page-not-found">
            <img src={img} alt="Page not found" />
            <a className="btn pnf" href="/">Go Home</a>
        </div>
     );
}
 
export default PageNotFound;