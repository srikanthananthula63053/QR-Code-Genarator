import useLocalStroage from "./useLocalStroage";


export default function LightDarkMode(){
    const[theme,setTheme] = useLocalStroage('theme',"dark")
    return(
        <div className="light-dark-mode">
            <div className="container">
        <p>Hello World!</p>
        <button>change theme</button>
        </div>
        </div>
    );
}