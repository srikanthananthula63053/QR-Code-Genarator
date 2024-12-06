import useLocalStroage from "./useLocalStroage";

import "./theme.css";


export default function LightDarkMode() {
    const [theme, setTheme] = useLocalStroage("theme", "dark");

    function handleToggleTheme() {
        setTheme(theme === "light" ? "dark" : "light")
    }

    console.log(theme)

    return (
        <div className="hello-sree" data-theme={theme}>
            <div className="container">
                <p>Hello World !</p>
                <button onClick={handleToggleTheme}>change theme</button>
            </div>
        </div>
    );
}