import Head from "next/head";
import PageLayout from "../page_layout/PageLayout";
import UsePrompt from "../components/home/UsePrompt";

export default function Home() {
  const data = [
    {path:'/remove-repo', title:'Git Remove Repo'}
  ]
  return (
    <div>
      <PageLayout data={data} />
      {/* <Head>
        <title> {"GIT & GITHUB"} </title>
      </Head>
      */}
    </div>
  );
}
