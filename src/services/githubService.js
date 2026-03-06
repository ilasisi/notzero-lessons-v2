export const fetchGithubProfile = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
        throw new Error("Github account not found!");
    }

    return response.json();
};
