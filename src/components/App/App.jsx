import { useClickOutside } from "../../hooks";

const App = () => {

    const ref = useClickOutside(() => {
        console.log("How you doing?")
    })

    return <h1 style={{
        border: "1px solid red",
        backgroundColor: "dodgerblue",
        color: "white"
    }} ref={ref}>Custom Hooks</h1>
}

export default App;