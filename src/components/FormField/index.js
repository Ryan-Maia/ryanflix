import React from 'react';
import './style.css';


function FormField({value ,onChange, type, name, label, required, selectData}){
    if(type==="color"){
        return(
            <div className="color-input">
                
                <label className="color-label" htmlFor={name+'-id'} >Cor</label><br />
                <input type={type} id={name+'-id'} name={name} required={required} onChange={onChange} value={value} />
                
            </div>
        )
    }else if(type==="select"){
        return(
            <select name={name} onChange={onChange} selected={value} >
                {selectData.map((row)=>{
                    return(
                        <option  value={row.id} key={row.id} >{row.titulo} </option>
                    )
                })}
                
            </select>
        )

    }
    else{
        return(

            <div className="contact-form row">
                <div className="form-field col x-50">
                    <input 
                        id={name+'-id'}
                        name={name} 
                        className="input-text js-input" 
                        type={type} 
                        required={required}  
                        onChange={onChange}
                    />
                    <label htmlFor={name+'-id'} className="label">{label}</label>
                </div>
            </div>
        )
    }
}

export default FormField;