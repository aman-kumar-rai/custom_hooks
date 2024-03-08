import { useEffectOnce } from "../../hooks";

const App = () => {

    useEffectOnce(() => {
        console.log("Setting up");

        return function cleanup() {
            console.log("Cleaning up");
        }
    })

    return <h1>Custom Hooks</h1>
}

export default App;