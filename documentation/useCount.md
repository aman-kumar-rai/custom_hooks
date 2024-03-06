# useCount
useCount hook wraps the bussion logic for a counter inside a custom hook.


### API signature
useCount takes a config as input, and exposes an object as it's output.

`const output = useCount(inputConfig)`

The input config has following options:

    1. initialValue: The value to start the count state from, defaults to "0".

    2. step: The value by which to increment or decrement the count state, default to "1".

    3. min: The minimum value possible for count state, defaults to "-Infinity".

    4. max: The maximum value possible for coun state, defaults to "+Infinity".

### Sample code
`   
    
    import { useCount } from "../../hooks";

    const Counter = () => {
        const { count, increment, decrement } = useCount({
            initialValue: 0,
            step: 2,
            min: 0,
            max: 10
        });

        return (
            <div>
                <p>Count is {count}</p>
                <section>
                    <button onClick={increment}>+</button>
                    <button onClick={decrement}>-</button>
                </section>
            </div>
        )
    }

    export default Counter;
`
