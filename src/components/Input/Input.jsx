
import React from 'react';

const Input = (props) => {

    let handleChange = (e) =>{
        props.handleChange(e);
    }
    
    let placeholder = {
        email : "Enter your email",
        name : "Enter your full name",
        password : "Enter your password",
        confirmPassword : "Enter your password",
        phone : "Enter your phone",
        title : "Enter job title",
        package : "Enter job package",
        company : "Enter job company"
    }

    return props.required ? ( 
        <input name={props.name} type={props.type} placeholder={placeholder[props.name]} maxLength={props.maxlength} value={props.value} onChange={handleChange} required/>
     ) : <input name={props.name} type={props.type} placeholder={placeholder[props.name]} maxLength={props.maxlength} value={props.value} onChange={handleChange}/>
}
 
export default Input;