import Head from "next/head";
import UsePrompt from "../components/home/UsePrompt";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Use Prompt Hook </title>
      </Head>
      <UsePrompt />
    </div>
  );
}
