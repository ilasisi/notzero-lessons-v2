import {
    Building2Icon,
    LinkIcon,
    LoaderCircle,
    MapPin,
    MoonIcon,
    SearchIcon,
    SunIcon,
    TwitterIcon,
} from "lucide-react";
import { useContext, useState } from "react";
import { fetchGithubProfile } from "../services/githubService";
import { formatDate } from "../lib/helper";
import { ThemeContext } from "../context/ThemeProvider";
import { useTheme } from "../store/themeStore";

export const GithubProfileSearch = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);

    // const { theme, toggleTheme } = useContext(ThemeContext);
    const { theme, toggleTheme } = useTheme();

    const handleSearch = async (event) => {
        event.preventDefault();

        setIsLoading(true);
        try {
            const user = await fetchGithubProfile(username);

            setUser(user);
            setError(undefined);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex p-4 w-full h-dvh items-center max-w-lg mx-auto">
            <div className="w-full space-y-6">
                <div className="flex justify-between gap-3">
                    <h3 className="text-2xl font-mono font-bold">devfinder</h3>
                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-3"
                    >
                        <span className="uppercase font-bold text-sm">
                            {theme === "light" ? "Dark" : "Light"}
                        </span>
                        <span>
                            {theme === "light" ? <MoonIcon /> : <SunIcon />}
                        </span>
                    </button>
                </div>
                <form
                    onSubmit={handleSearch}
                    className="flex gap-3 bg-neutral-200 p-2 sm:p-3 rounded-xl justify-between dark:bg-slate-800"
                >
                    <div className="flex items-center gap-3 flex-1">
                        <span>
                            <SearchIcon className="text-blue-500" />
                        </span>
                        <input
                            required
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Seacrh GitHub username"
                            className="border-none focus:outline-none w-full"
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 rounded-lg text-xs sm:text-sm text-white"
                    >
                        {isLoading ? (
                            <LoaderCircle className="animate-spin" />
                        ) : (
                            <span>Search</span>
                        )}
                    </button>
                </form>
                {error && <p className="text-center text-red-500">{error}</p>}
                {user && !isLoading && !error && (
                    <div className="bg-neutral-200 dark:bg-slate-800 p-3 sm:p-6 rounded-xl">
                        <div className="flex gap-6">
                            <img
                                className="size-14 sm:size-20 rounded-full"
                                src={user.avatar_url}
                            />
                            <div className="w-full space-y-3">
                                <div className="flex flex-col sm:flex-row justify-between gap-3">
                                    <div className="space-y-1">
                                        <p className="font-bold sm:text-lg">
                                            {user.name}
                                        </p>
                                        <p className="text-xs text-blue-500">
                                            @{user.login}
                                        </p>
                                    </div>
                                    <p className="text-xs dark:text-slate-300">
                                        Joined {formatDate(user.created_at)}
                                    </p>
                                </div>
                                <p className="text-xs dark:text-slate-300">
                                    {user.bio}
                                </p>
                                <div className="bg-neutral-300 dark:bg-slate-900 grid grid-cols-3 gap-3 rounded-xl p-3">
                                    <div>
                                        <p className="text-xs sm:text-sm">
                                            Repos
                                        </p>
                                        <p className="font-bold text-lg sm:text-xl">
                                            {user.public_repos}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs sm:text-sm">
                                            Followers
                                        </p>
                                        <p className="font-bold text-lg sm:text-xl">
                                            {user.followers}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs sm:text-sm">
                                            Following
                                        </p>
                                        <p className="font-bold text-lg sm:text-xl">
                                            {user.following}
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2 dark:text-neutral-200">
                                        <span>
                                            <MapPin className="size-4" />
                                        </span>
                                        <p className="text-xs">
                                            {user.location}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 dark:text-neutral-200">
                                        <span>
                                            <TwitterIcon className="size-4" />
                                        </span>
                                        <p className="text-xs">
                                            {user.twitter_username}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 dark:text-neutral-200">
                                        <span>
                                            <LinkIcon className="size-4" />
                                        </span>
                                        <p className="text-xs break-all line-clamp-1">
                                            {user.blog}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 dark:text-neutral-200">
                                        <span>
                                            <Building2Icon className="size-4" />
                                        </span>
                                        <p className="text-xs">
                                            {user.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
