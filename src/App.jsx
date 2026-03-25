import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "./store/themeStore";

const App = () => {
    const { theme } = useTheme();
    useEffect(() => {
        const htmlEl = document.documentElement;

        htmlEl.classList.toggle("dark", theme === "dark");
    }, [theme]);

    return (
        <div className="space-y-5">
            <nav className="bg-blue-500 gap-3 flex justify-center items-center p-3 max-w-xl mx-auto m-3 rounded-2xl">
                <NavItem to="/">Home</NavItem>
                <NavItem to="/extentions">Extensions</NavItem>
                <NavItem to="/posts">Posts</NavItem>
                <NavItem to="/about">About</NavItem>
                <NavItem to="/contact">Contact</NavItem>
            </nav>
        </div>
    );
};

export default App;

const NavItem = ({ to, children }) => {
    return (
        <NavLink
            className={({ isActive }) =>
                isActive ? "text-white" : "text-neutral-600"
            }
            to={to}
        >
            {children}
        </NavLink>
    );
};
