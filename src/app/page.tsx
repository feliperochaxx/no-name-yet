import { Octokit } from 'octokit';

export default async function Home() {
  // The personal access token must have access to repos
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });

  const { data } = await octokit.rest.search.issuesAndPullRequests({
    q: 'org:feliperochaxx is:pull-request',
  });

  return (
    <main>
      <h1>Welcome, Avatar</h1>
      <h3>COUNT: {data.total_count}</h3>
      <ul>
        {data.items.map((i) => (
          <li key={i.number}>{i.title}</li>
        ))}
      </ul>
    </main>
  );
}
