# useTimeout
useTimeout hook wraps setTimeout api inside a hook. It clears the timer, and schedules a new one if delay is changed inside the consuming component. It doesn't clear the timer, or reschedule it, if the callback is changed. But, the updated callback function will be called on timer expiration.


### API signature
`useTimeout(callback, delay)`

useTimeout takes 2 arguments, and doesn't return anything.

#### Input:
        1. callback: The callback function to execute after delay(ms) time.

        2. delay: The number of milliseconds after which the callback will be invoked. Default value is 0.

### Sample code
`   
    import { useTimeout } from "../../hooks/index.jsx";
    
    const App = () => {

        useTimeout(() => {
            console.log("useTimeout")
        }, 1000)

        return (
            <h1>useTimeout hook</h1>
        )
    }

    export default App;
`
