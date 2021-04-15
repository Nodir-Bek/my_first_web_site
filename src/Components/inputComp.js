import React from 'react';

const InputComp = (props) => {   
    return (        
        <>            
         <input type="text"  onChange={props.hanlerFunc} placeholder='Textni kiriting!'/>            
        </>
    )
}

export default InputComp
