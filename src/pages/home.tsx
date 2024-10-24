import React from "react";
import { useState } from "react";

// Interface para tipar os parâmetros da Home
interface HomeProps {
    toggleTheme: () => void;
    isDarkMode: boolean;
}

export function Home({ toggleTheme, isDarkMode }: HomeProps) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <button onClick={() => toggleTheme()}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    );

}