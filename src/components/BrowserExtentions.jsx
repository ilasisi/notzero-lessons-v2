import { useState } from "react";
import { rawExtensions } from "../lib/extensions";
import { MoonIcon, SunIcon } from "lucide-react";
import { Link } from "react-router-dom";

const FILTERS = ["all", "active", "inactive"];

export const BrowserExtentions = () => {
    const [extensions, setExtensions] = useState(rawExtensions);
    const [filter, setFilter] = useState("all");

    const handleDelete = (name) => {
        const newExtensions = extensions.filter((item) => item.name !== name);
        setExtensions(newExtensions);
    };

    const filteredExtensions = extensions.filter((item) => {
        if (filter === "active") return item.isActive;
        if (filter === "inactive") return !item.isActive;
        return true;
    });

    return (
        <div className="flex p-4 w-full h-dvh sm:items-center max-w-4xl mx-auto">
            <div className="w-full space-y-4">
                <Header />
                <FilterSection selected={filter} setFilter={setFilter} />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {filteredExtensions.map((item) => (
                        <ExtensionItem
                            item={item}
                            key={item.name}
                            onDelete={() => handleDelete(item.name)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Header = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";

        document.documentElement.classList.toggle("dark", newTheme === "dark");

        setTheme(newTheme);
    };
    return (
        <div className="bg-neutral-200 dark:bg-slate-800 rounded-lg py-2 px-3">
            <div className="flex justify-between">
                <img className="w-30" src="/src/assets/images/logo.svg" />
                <button onClick={toggleTheme}>
                    {theme === "dark" ? (
                        <SunIcon className="size-5" />
                    ) : (
                        <MoonIcon className="size-5" />
                    )}
                </button>
            </div>
        </div>
    );
};

const FilterSection = ({ selected, setFilter }) => {
    const handleFilter = (value) => {
        setFilter(value);
    };
    return (
        <div className="flex flex-col sm:flex-row gap-3 justify-between">
            <p className="text-xl font-bold">Extensions List</p>
            <div className="flex items-center gap-3">
                {FILTERS.map((filter) => (
                    <button
                        key={filter}
                        className={`capitalize border rounded-full ${selected === filter ? "bg-orange-600 text-white border-orange-600" : "bg-neutral-200 dark:bg-slate-800 border-neutral-300"} text-xs px-3 py-1 dark:border-slate-700`}
                        onClick={() => handleFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
    );
};

const ExtensionItem = ({ item, onDelete }) => {
    return (
        <Link to={`/extentions/${item.name}`}>
            <div className="border relative h-38 border-neutral-300 rounded-xl p-2 bg-neutral-100 dark:bg-slate-800 dark:border-slate-700">
                <div className="space-y-6">
                    <div className="flex gap-3">
                        <img className="size-10" src={item.logo} />
                        <div>
                            <p className="font-bold dark:text-white">
                                {item.name}
                            </p>
                            <p className="text-xs text-neutral-600 dark:text-neutral-300">
                                {item.description}
                            </p>
                        </div>
                    </div>
                    <div className="absolute px-2 bottom-2 left-0 w-full flex justify-between">
                        <button
                            onClick={onDelete}
                            className="border rounded-full border-neutral-300 text-xs px-3 py-1 dark:border-neutral-500"
                        >
                            Remove
                        </button>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                defaultChecked={item.isActive}
                                type="checkbox"
                                className="sr-only peer"
                            />

                            <div className="relative w-7 h-4 bg-gray-300 dark:bg-gray-600 rounded-full peer-checked:bg-orange-600 transition-colors group">
                                <div className="absolute top-0.5 left-0.5 size-3 bg-white rounded-full transition-transform transform group-peer-checked:translate-x-3"></div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </Link>
    );
};
