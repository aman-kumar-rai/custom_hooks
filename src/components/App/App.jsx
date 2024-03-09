import { useHover } from "../../hooks/index.jsx";

const App = () => {

    const [ref, isHovered] = useHover();

    return (
        <div style={{
            height: "200px",
            backgroundColor: "dodgerblue",
            color: "white"
        }} ref={ref}>
            {isHovered && (
                <p>I am being hovered upon</p>
            )}
        </div>
    )
}

export default App;