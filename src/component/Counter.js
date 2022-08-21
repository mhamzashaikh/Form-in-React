import {useState} from 'react';

function Counter(){
    const [value, setValue]= useState(0);


    return(
        <div>
        <h2>{value}</h2>
        <button onClick={()=> setValue(value+1)}>Increment</button>
        <button onClick={()=> setValue(value-1)}>Decrement</button>

        </div>
    
    
    );


}
export default Counter;