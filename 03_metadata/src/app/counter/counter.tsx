"use client";

import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>I am inside counter.tsx</h1>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}