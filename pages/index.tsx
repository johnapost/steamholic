import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <title>Steamholic</title>
      <meta name="description" content="For Steam lovers anywhere." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Steamholic</h1>
    <h2>Hi there</h2>
    <p>
      Thank you for checking out my little project from 2014. Please be mindful
      that this is in an alpha state.
    </p>
    <h2>Features</h2>
    <ul>
      <li>Browser your Steam user data in a snappy UI</li>
      <li>Compare card inventories with friends</li>
      <li>Marvel at the size of your backlog</li>
    </ul>
  </div>
);

export default Index;
