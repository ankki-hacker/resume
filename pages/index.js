// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Deployed Site</title>
        <meta name="description" content="All root files deployed with this page" />
      </Head>

      <h1>Welcome to My Site</h1>
      <p>This page ensures all root files are deployed:</p>
      
      <ul>
        <li><code>.env</code> (used in build)</li>
        <li><code>.eslintrc.json</code> (config)</li>
        <li><code>next.config.js</code> (Next.js settings)</li>
        <li>All other root files</li>
      </ul>

      {/* Example: Link to a public file */}
      <a href="/resume.pdf">Download Resume (if placed in `public/`)</a>
    </div>
  );
}
