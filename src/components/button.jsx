import React from 'react';
function Button({onClickProps, label}){
    return(
        <button onClick={onClickProps} >{label}</button>

    )
}
export default Button