import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Extension from "./pages/Extension.jsx";
import ExtensionDetails from "./pages/ExtensionDetails.jsx";
import Posts from "./pages/Posts.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";

createRoot(document.querySelector(".app")).render(
    <StrictMode>
        {/* <ThemeProvider> */}
        <BrowserRouter>
            <App />

            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/extentions" element={<Extension />} />
                <Route
                    path="/extentions/:name"
                    element={<ExtensionDetails />}
                />
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:id" element={<PostDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
        {/* </ThemeProvider> */}
    </StrictMode>,
);
