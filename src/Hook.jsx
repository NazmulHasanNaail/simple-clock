import React, { useState } from 'react';



function Hook(){
    const state = useState();
    const [count, setConut] = useState(0);
    const innNumb = ()=>{
        setConut(count+1);
    }
    return<>
    <h1>Hook</h1>
     <h2 className="heading">{count}</h2>
     <button onClick={innNumb}>Click me</button>
     </>
}
export default Hook;