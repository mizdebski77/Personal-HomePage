const URL = "https://api.github.com/users/mizdebski77/repos?sort=created&direction=desc";

export const getRepos = async () => {
    const response = await fetch(URL);

    if (!response.ok) {
        throw new Error(response.text);
    };
    return await response.json();
};

