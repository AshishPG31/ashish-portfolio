const USERNAME = "AshishPG31";

export async function getRepositories() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const repos = await response.json();

    return repos
      .filter((repo) => !repo.fork)
      .sort(
        (a, b) =>
          new Date(b.updated_at) - new Date(a.updated_at)
      );

  } catch (error) {
    console.error(error);
    return [];
  }
}