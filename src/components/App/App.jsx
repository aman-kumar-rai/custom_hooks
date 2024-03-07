import { useState, useEffect } from "react";
import { useInterval } from "../../hooks/index.jsx";


const App = () => {

    const [delay, setDelay] = useState(2000);
    const [callback, setCallback] = useState(() => {
        return () => {
            console.log("callback 1")
        }
    })

    useEffect(() => {

        setDelay(5000);
        setCallback(() => {
            return () => {
                console.log("callback 2")
            }
        })
    }, [])

    useInterval(callback, delay)

    return (
        <h1>testing useTimeout hook</h1>
    )
}

export default App;