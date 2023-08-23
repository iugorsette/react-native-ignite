
export async function getGithubUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
}