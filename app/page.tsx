import Link from "@/node_modules/next/link";
import fs from "fs";

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) =>
    file.toLowerCase().endsWith(".md")
  );
  const fileNames = markdownPosts.map((file) => file.replace(".md", ""));

  return fileNames;
};

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((fileName) => (
    <div key={fileName}>
      <Link href={`/posts/${fileName}`}>
        <h2>{fileName}</h2>
      </Link>
    </div>
  ));

  return <main>{postPreviews}</main>;
}
