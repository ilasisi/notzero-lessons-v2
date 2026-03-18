import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Extension from "./pages/Extension";
import ExtensionDetails from "./pages/ExtensionDetails";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";

const App = () => {
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
