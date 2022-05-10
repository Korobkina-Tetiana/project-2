import React, { useState } from 'react';

const Fcounter = function () {
    const [count, setCount] = useState(0)

    function increment() {
        setCount((prev) => prev + 1)
        alert(count)
    }

    function decrement() {
        setCount((prev) => prev - 1)
        alert(count)
    }

    return (
        <div>
            <p>Your clicked {count} times</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
      );
    }

    export default Fcounter;



  
