import { useFocus } from "../../hooks/index.jsx";

const App = () => {

    const [ref, isFocused] = useFocus();


    return (
        <div>
            <input ref={ref} />
            {isFocused && (
                <p>User is about to type</p>
            )}
        </div>
    )

}

export default App;