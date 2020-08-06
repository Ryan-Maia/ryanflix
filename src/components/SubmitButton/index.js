import React from 'react';
import './style.css';

function SubmitButton({children}){
    return (
        <div id ="center-div">
            <button type="submit" className="submit-btn">{children}</button>
        </div>
    )
}

export default SubmitButton